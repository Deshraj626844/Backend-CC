require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/deshraj', (req,res) => {
    res.send('Hello Deshraj')
})

app.get('/singh', (req,res) => {
    res.send('Hello Deshraj Singh')
})

app.get('/login', (req,res) => {
    res.send('This is login Page')
})

app.get('/signup', (req,res) => {
    res.send('This is signup page')
})


app.listen(process.env.PORT , () => {
  console.log(`Example app listening on port ${port}`)
})