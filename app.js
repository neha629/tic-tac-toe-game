const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
const port = process.env.PORT || 3000

app.set('view engine','hbs');

const publicDirPath = path.join(__dirname,'/public')
console.log(publicDirPath)
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log('Working!')
})