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
    e.preventDefault()
    this.props.handleSubmit(this.state.input)
    this.setState({
      input: ''
    })
  }

  render() {
    return (
      <div className='form'>
        <form onSubmit={this.handleClick}>
        <h1>Gimme a Git</h1>
        <input id='git-field' type='text' value={this.state.input} onChange={this.handleChange}/>
        <br></br>
        <input id='submit' type='submit'/>
        </form>
      </div>
    )
  }
}

export default Search
