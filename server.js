require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const jsxEngine = require('jsx-view-engine')
const PORT = process.env.PORT || 3000
const Vegetable = require('./models/vegetable')
const app = express()
const methodOverride = require('method-override')

app.use(express.urlencoded({ extended: true}))

app.use(methodOverride('_method'))
app.set('view engine','jsx')
app.engine('jsx',jsxEngine())

mongoose.connect(process.env.MONGO_URI)
mongoose.connection.once('open', () => {
    console.log('Youre connected bitchhhhhh')
})
//INDUCES
//Index page
app.get('/vegetables',async(req,res)=>{
    try {
        const foundVegetables = await Vegetable.find({})
        res.render('vegetables/Index',{
            vegetables:foundVegetables
        })
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//New
//Show the user a form to fill out to create a vegetable
app.get('/vegetables/new', (req, res) => {
    res.render('vegetables/New')
})

//DELETE 
//backend only functionality that is used to delete a vegetable

app.delete('/vegetables/:id',async(req,res)=>{
try {
    await Vegetable.findOneAndDelete({'_id':req.params.id}).then(()=>{
        res.redirect('/vegetables')
    })
} catch (error) {
    res.status(400).send({message:error.message})
    
}
})
//Create a resource
app.post('/vegetables',async(req,res)=>{
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }else{
        req.body.readyToEat = false
    }

    try {
        const createdVeggie = await Vegetable.create(req.body)
        res.redirect(`/vegetables/${createdVeggie._id}`)
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//EDIT
//show you a form that lets you edit the vegetable
app.get('/vegetables/:id/edit',async(req,res)=>{
    try {
        const foundVeggie = await Vegetable.findOne({'_id':req.params.id})
        res.render('vegetables/Edit',{
            vegetable:foundVeggie
        })
    } catch (error) {
        res.status(400).send({message:error.message})
    }
})

//SHOW 
app.get('/vegetables/:id',async(req,res)=>{
    try {
        const foundVeggie = await Vegetable.findOne({'_id':req.params.id})
        res.render('vegetables/Show',{
            vegetable:foundVeggie
        })
     } catch (error) {
        res.status(400).send({message:error.message})
    }
})
app.listen(PORT, () => {
    console.log(`You're listening on Port ${PORT}!`)
})