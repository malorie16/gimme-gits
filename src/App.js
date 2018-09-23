import React, { Component } from 'react';
import Search from './components/search.js'
import GitCard from './components/GitCard.js'
import getUser from './adapter/adapter.js'

class App extends Component {
  state = {
    user: ''
    // user: {
    //   name: 'Malorie Casimir',
    //   public_repos: 249,
    //   avatar_url: 'https://avatars1.githubusercontent.com/u/37854050?v=4',
    //   email: 'maloriecasimirdev@gmail.com',
    //   company: 'Freelancer'
    // }
  }

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
        <Search user={this.state.user} handleSubmit={this.handleSubmit}/>
        <GitCard user={this.state.user}/>
      </div>
    );
  }
}

export default App;
