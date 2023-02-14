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

            // render ile direkt olarak işliyor fakat 
            // views ile app.js dosyan aynı klasörde olmalı 
app.get('/', (request, response) => {
    response.status(200).render('mainPage', {baslik: 'Anasayfa'})
})

app.get('/about', (request, response) => {
    response.status(200).render('about',  {baslik: 'Hakkimizda'}) 
})

app.get('/about-us', (request, response) => {
    response.status(302).redirect('/about')
})


app.use( (request, response) => {
    response.status(404).render('404',  {baslik: 'Sayfa Bulunamadi'})
})

// .use ardından gelen fonksiyonları çalıştırmıyor 