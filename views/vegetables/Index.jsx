const React = require('react')

function Index(props){
    return(
        <div>
            <h1>Vegetables Index Page</h1>
            <a href='/vegetables/new'>Create a new Veggie here</a>

        <ul>
            {
        props.vegetables.map(veggie => {
              return (<li key={veggie._id}><a href={`/vegetables/${veggie._id}`}>{veggie.name}</a> is {veggie.color}</li>)
            })
            }
        </ul>
        </div> 
    )
}

module.exports = Index