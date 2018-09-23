import React, { Component } from 'react';
import Search from './components/search.js'
import GitCard from './components/GitCard.js'
import getUser from './adapter/adapter.js'

class App extends Component {
  state = {
    user: ''
  }

  //hits Github API and sets the local state to its response
  handleSubmit = (username) => {
    getUser(username)
    .then(data => {
      this.setState({
        user: data
      })
    })
  }

  render() {
    return (
      <div className="git-container">
        <Search handleSubmit={this.handleSubmit}/>
        <GitCard user={this.state.user}/>
      </div>
    );
  }
}

export default App;
