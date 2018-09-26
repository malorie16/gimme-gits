import React, { Component } from 'react';
import Search from './components/search.js'
import GitCard from './components/GitCard.js'
import getUser from './adapter/adapter.js'

//local storage
const store = JSON.parse(localStorage.getItem("store")) || {};

class App extends Component {
  state = {
    user: '',
    favorite: '',
    toggle: ''
  }
  
  //hits Github API and sets the local state to its response
  handleSubmit = (username) => {
    //checks local storage before hitting API
    if (store[username]) {
      this.setState({
          favorite: JSON.parse(localStorage.store)[username],
          toggle: 'fav'
      })
    //if it's not in local storage, we hit the API and save it to local storage
    } else {
      getUser(username)
      .then(data => {
        this.setState({
          user: data,
          toggle: 'search'
        }, () => store[username] = this.state.user)
      })
      localStorage.setItem('store', JSON.stringify(store))
    }
  }

  //renders list of favorites if they exist
  renderFavorites = () => {
    if (localStorage.store) {
    const favs = Object.keys(JSON.parse(localStorage.store)).map((key) => {
        return <p id='fav' key={key.id} onClick={this.viewFavorite}>{key}</p>
     })
     return (
      <div>
        <p>Recent searches:</p>
        {favs.reverse()}
      </div>
     )
    } else {
      return
    }
  }

  //sets state so we can toggle from the searched user to the favorited user
  viewFavorite = (e) => {
    const fav = e.target.innerText
    this.setState({
      favorite: JSON.parse(localStorage.store)[fav],
      toggle: 'fav'
    })
  }

  //renders favorited user
  renderSavedCard = () => {
    return <GitCard user={this.state.favorite} favorite='true' deleteFavorite={this.handleDelete}/>;
  }

  //renders searched user
  renderSearchCard = () => {
    return <GitCard user={this.state.user} handleSave={this.handleSave} />
  }

  render() {
    console.log(this.state.favorite)
    return (
      <div className="git-container">
        <Search handleSubmit={this.handleSubmit}/>
        {this.state.toggle === 'fav' ? this.renderSavedCard() : this.renderSearchCard()}
        {this.renderFavorites()}
      </div>
    );
  }
}

export default App;
