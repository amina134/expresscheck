const express= require('express')
const timer=require('./middleware/checktime')
const app=express()
const port=4000;
app.use(express.static('public'))
app.set('view engine','pug')
app.use(timer)

app.get('/contact',timer,(req,res)=>{
    res.render('contact')
})
app.get('/home',(req,res)=>{
    res.render('home')
})
app.get('/services',(req,res)=>{
    res.render('services')
})







app.listen(port,()=>{
    console.log(`serving is running on ${port}`)
})




