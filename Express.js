
const express =require('express')
const app=express()
app.use((req,res,next)=>{
    console.log('In this middileware')
    next()
})
app.use((req,res,next)=>{
    console.log('In the other middleware')
    res.send('<h1>Welcome to Express Js</h1>')
})
app.listen(3000)
