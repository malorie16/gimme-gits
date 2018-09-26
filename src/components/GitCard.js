import React from 'react'

const GitCard = (props) => {

  const renderCard = () => {
    //checks for an error message
    if (props.user.message) {
      return <h1>We couldn't find that user! Try again.</h1>
    //displays user's information if fetch was successful
    } else if (props.user) {
      // console.log(JSON.parse(localStorage.getItem('user')))
      const deleteButton = <button onClick={props.deleteFavorite}>Delete</button>
      const saveButton = <button onClick={props.handleSave}>Save</button>;
      return (
        <div className='git-card'>
          <img src={props.user.avatar_url} alt=''/>
          <div>
            <h2>{props.user.name}</h2>
            <p>{props.user.public_repos} public repo(s)</p>
            <p>{props.user.email || "This user doesn't have an email on record!"}</p>
            <p>{props.user.company || "This user doesn't have a company on record!"}</p>
            
            {props.favorite === 'true' ? deleteButton : saveButton}
          </div>
        </div>
      )
    // let's user know how to use the app prior to making any fetch requests
    } else {
      return <h1>Search for a GitHub user above!</h1>
    }
  }
  return (
    <div>{renderCard()}</div>
  )
}

export default GitCard
