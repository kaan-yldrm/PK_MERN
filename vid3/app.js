const { dir } = require('console')
const { request, response } = require('express')
const express = require('express')
const { dirname } = require('path')
const { nextTick } = require('process')

const app = express()

// Template Engine
app.set('view engine', 'ejs')

// Middleware
app.listen(3000)

app.get('/', (request, response) => {
    response.status(200)
    response.sendFile('./htmlFiles/index.html', {root: __dirname})
    console.log(__dirname, "\n", __filename)
})

app.get('/about', (request, response) => {
    response.status(200).sendFile('./htmlFiles/about.html', {root: __dirname})
})

app.get('/about-us', (request, response) => {
    response.status(302).redirect('/about')
})
app.use( (request, response) => {
    response.status(404).sendFile('./htmlFiles/404.html', {root: __dirname})
})

// .use ardından gelen fonksiyonları çalıştırmıyor 