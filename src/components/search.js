import React from 'react'

class Search extends React.Component {
  state = {
    input: ''
  }

  handleChange = (e) => {
    this.setState({
      input: e.target.value
    })
  }

  handleClick = (e) => {
    if (this.state.input.trim() === '') {
      e.preventDefault()
      alert("Isn't there anything we can git you? Please enter a username.")
    } else {
      e.preventDefault()
      this.props.handleSubmit(this.state.input.trim())
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
