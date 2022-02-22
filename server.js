   
const quotes = require("./quotes.json");

const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Access-Control-Allow-Headers": "Content-Type",
};


const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(quote)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})