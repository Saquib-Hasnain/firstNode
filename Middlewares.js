

const express =require('express')
const app=express()
const bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:false}))

app.use('/add-product',(req,res,next)=>{
    console.log('In this middileware')
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button><input type="text" name="title2"><button type="submit">Add Size</button></form>')
})
app.post('/product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
})
app.use('/',(req,res,next)=>{
    console.log('In the other middleware')
    res.send('<h1>Welcome to Express Js</h1>')
})
app.listen(3000)
