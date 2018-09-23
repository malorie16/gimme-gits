import React from 'react'

const GitCard = (props) => {
  const renderCard = () => {
    if (props.user) {
      return (
        <div className='git-card'>
        <img src={props.user.avatar_url} alt=''/>
        <p>{props.user.name || null}</p>
        <p>{props.user.public_repos || null}</p>
        <p>{props.user.email || "This user doesn't have an email on record!"}</p>
        <p>{props.user.company || "This user doesn't have a company on record!"}</p>
        </div>
      )
    } else {
      return null
    }
  }
  return (
    <div>{renderCard()}</div>
  )
}

export default GitCard
