New.jsx
const React = require('react')
function New (props)  {
    return(
    
    <div>
        <h1>New Vegetable Page</h1>
    
    <form action='/vegetables' method='POST'>
       Name Your Veggie:<input type='text'name='name'/><br/>
       Color: <input type='text' name='color'/><br/>
       Is ready to eat:<input type='checkbox' name='readyToEat'/><br/>
       <input type="submit" value='Create Vegetable'/>
    </form>
    </div>
    )
}
module.exports = New