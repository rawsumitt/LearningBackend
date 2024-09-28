require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello and welcome here! try `/sumit` to jump on different page')
})

app.get('/sumit', (req, res)=>{
    res.send('<h1>Good job<h1/>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})