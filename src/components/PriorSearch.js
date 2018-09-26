import React from 'react'

const PriorSearch = (props) => {
    //if the store exists in local storage render its keys
    if (localStorage.store) {
        const favs = Object.keys(JSON.parse(localStorage.store)).map((key) => {
            return <p id='fav' key={Math.random()} onClick={props.viewSearched}>{key}</p>
        })
        return (
            <div>
                <p>Recent searches:</p>
                {favs.reverse()}
            </div>
        )
    } else {
        return
    }
}

export default PriorSearch