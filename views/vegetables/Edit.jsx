const React = require('react')

function Edit(props){
   const {name,_id,readyToEat,color} = props.vegetable

   return (
    <div>
        <h1>{name} Edit Page</h1>
        <a href='/vegetables'>Go back to Index Page</a>
        <form action={`/vegetables/${_id}?_method=PUT`}method='POST'>
            Name:<input type='text' name='name'
            defaultValue={name} /><br/>
            color:<input type='text' name='colo' defaultValue={color}/><br/>
            Is Ready to Eat: {readyToEat?<input type='checkbox' name='readyToEat' defaultChecked/>:<input type='checkbox' name='readyToEat'/>}<br/>
            <input type='submit' value='Update Veggie'/>
        </form>
    </div>
   )
}

module.exports = Edit