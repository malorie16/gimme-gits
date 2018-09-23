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
        <label>Gimme a Git</label>
        <input type='text' value={this.state.input} onChange={this.handleChange}/>
        <input type='submit'/>
        </form>
      </div>
    )
  }
}

export default Search
