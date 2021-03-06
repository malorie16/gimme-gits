import React from 'react'

class Search extends React.Component {
  state = {
    input: ''
  }

  //controls our input
  handleChange = (e) => {
    this.setState({
      input: e.target.value.trim()
    })
  }

  handleClick = (e) => {
    //checks to see if the user didn't input anything
    if (this.state.input === '') {
      e.preventDefault()
      alert("Isn't there anything we can git you? Please enter a username.")
    } else {
      //lifts the state to App.js so we can make our API call
      e.preventDefault()
      this.props.handleSubmit(this.state.input)
      //resets our input
      this.setState({
        input: ''
      })
    }
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleClick}>
          <h1>Gimme Gits</h1>
          <input id='git-field' type='text' value={this.state.input} onChange={this.handleChange}/>
          <br></br>
          <input id='submit' type='submit'/>
        </form>
      </div>
    )
  }
}

export default Search
