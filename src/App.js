import React, { Component } from 'react';
import Search from './components/search.js'
import GitCard from './components/GitCard.js'
import getUser from './adapter/adapter.js'

class App extends Component {
  state = {
    user: '',
    favorite: '',
    toggle: ''
  }

  //hits Github API and sets the local state to its response
  handleSubmit = (username) => {
    getUser(username)
    .then(data => {
      this.setState({
        user: data,
        toggle: 'search'
      })
    })
  }

  //saves user to local storage
  handleSave = () => {
    const store = JSON.parse(localStorage.getItem('store')) || {}
    store[this.state.user.login] = this.state.user
    localStorage.setItem('store', JSON.stringify(store))
    //needed to trigger a re-render so the favorites list can update
    this.setState({ 
      user: this.state.user 
    });
  }

  renderFavorites = () => {
    //render favorites
    if (localStorage.store) {
    const favs = Object.keys(JSON.parse(localStorage.store)).map((key) => {
        return <p id='fav' key={key.id} onClick={this.viewFavorite}>{key}</p>
     })
     return <div>
       <p>Recent Favs:</p>
       {favs}
     </div>
    } else {
      return
    }
  }

  viewFavorite = (e) => {
    const fav = e.target.innerText
    // debugger
    this.setState({
      favorite: JSON.parse(localStorage.store)[fav],
      toggle: 'fav'
    })
  }

  handleDelete = (e) => {
    // debugger
    delete JSON.parse(localStorage.store)[this.state.favorite.login]
    this.setState({
      favorite: ''
    })
  }

  renderFavoriteCard = () => {
    return <GitCard user={this.state.favorite} handleSave={this.handleSave} favorite='true' deleteFavorite={this.handleDelete}/>;
  }

  renderSearchCard = () => {
    return <GitCard user={this.state.user} handleSave={this.handleSave} />
  }

  render() {
    console.log(this.state.toggle)
    return (
      <div className="git-container">
        <Search handleSubmit={this.handleSubmit}/>
        {this.state.toggle === 'fav' ? this.renderFavoriteCard() : this.renderSearchCard()}
        {this.renderFavorites()}
      </div>
    );
  }
}

export default App;
