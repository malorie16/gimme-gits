import React, { Component } from 'react';
import Search from './components/search.js'
import GitCard from './components/GitCard.js'
import PriorSearch from "./components/PriorSearch";
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
  renderSearches = () => {
    if (localStorage.store) {
      return <PriorSearch viewFavorite={this.viewFavorite} />
    } else {
      return
    }
  }

  //sets state so we can toggle from the searched user to the favorited user
  viewFavorite = (e) => {
    const fav = e.target.innerText
    this.setState({
      user: JSON.parse(localStorage.store)[fav],
      toggle: 'fav'
    })
  }

  render() {
    console.log(this.state.user)
    return (
      <div className="git-container">
        <Search handleSubmit={this.handleSubmit}/>
        <GitCard user={this.state.user} handleSave={this.handleSave}/>
        {this.renderSearches()}
      </div>
    );
  }
}

export default App;
