const { dir, Console } = require('console')
const { request, response } = require('express')
const express = require('express')
const { dirname } = require('path')
const { nextTick } = require('process')
const morgan = require('morgan')
const mongoose = require('mongoose')
const { result } = require('lodash')
const app = express()

//------DB Schmea
const mDB = require('./models/newSchema')




//------MONGODB-------
const dbURL = 'mongodb+srv://Henlo1here:S3aX7fAaEBqsPGnp@henlo.2m8afdg.mongodb.net/?retryWrites=true&w=majority'
mongoose.set('strictQuery', false)
.connect(dbURL)
.then( (result) => {
    app.listen(3000),
    console.log('Connecteddd...')
})
.catch( (err) => console.log(err))


app.get('/history', (request, response) => {
    mDB.find()
    .sort( {createdAt: -1} )
    .then( (result) => {
        response.render('history.ejs', {baslik: 'Gecmis', teklif: result}),
        console.log(typeof result);
    })
    
    .catch( (err) => {
        console.log(err)
    })
})

app.get('/history/:id' , (request, response) => {
    const id = request.params.id

    mDB.findById(id)
    .then( (result) => {
        response.render('teklifDetail.ejs', {baslik: 'Detail', details: result}),       
        console.log(result, typeof result),
        console.log(typeof result.proposalDetails[0].subUnitDetails[0].unitSubName)
        //for (var i=0; i < 1; i++) {console.log(typeof result.proposalDetails[i].unitMainQuantity)}
        
        // details burada bir Object fakat içinde Array'in tek bir verisi olduğu için mDB database şeması ile çağırmana gerek yok,
        // database'den çektiklerini details içine kaydediyor.        
    })
    .catch( (err) => {
        console.log(err)
    })


})

    // Burada manuel bir DB yazma işlemi yapıldı
app.get('/add' , (request, response) => {
    const newNew = new mDB ({
        firmName: 'HAUS',
        about: 'MYK Fiyat Teklifi',
        proposalId: 'MYK-5678',
        proposalDetails: 
        [{
            unitID: '2',
            unitMainName: '13UY0145-3/04 Endüstriyel Taşimaci',
            unitMainQuantity: 3,
            unitPrice: 300,
            subUnitDetails: 
            [
            {
                unitSubId: 1,
                unitSubName: 'B1 Forklift Kullanimi',
                unitSubPRice: 1880
            },
            {
                unitSubId: 2,
                unitSubName: 'B2 Elek. Transpalet Kullanimi',
                unitSubPRice: 1700
            
            }          
            ]
        },
        {
            unitID: '3',
            unitMainName: '13UY0145-3/04 Endüstriyel Taşimaci',
            unitMainQuantity: 5,
            unitPrice: 300,
            subUnitDetails: 
            [
            {
                unitSubId: 1,
                unitSubName: 'B1 Forklift Kullanimi',
                unitSubPRice: 1880
            }        
            ]
        }
        ],
        proposalPrice: 31040,
        proposalDiscount: 0
    })

    newNew.save()
    .then( (result) => {
        response.send(result)
    })
    .catch( (err) => {
        response.send(err)
    })
    
})

app.get('/all', (request, response) => {
    mDB.find()
    .then( (result) => {
        response.send(result)
    })
    .catch( (err) => {
        console.log(err)
    })
})

app.get('/tek' , (request, response) => {
    
    mDB.findById('63f60b3c31b6a5f4bfdc727e')
    .then( (result) => {
        response.send(result)
    })
    .catch( (err) => {
        console.log(err)
    })
}) 





// Template Engine - Render için
app.set('view engine', 'ejs')

// Middleware
/* app.listen(3000)
 */

//-----------------------------------//
app.use(express.static('public'))
// CSS dosyalarını public klasöründen çekiyor
app.use(morgan('tiny'))
    // morgan ile sayfa yükleme zamanlamarını kontrol edebilme

            
app.get('/', (request, response) => {
    response.status(200).render('mainPage', {baslik: 'Anasayfa'})
    console.log(request.path)
})
    // render ile direkt olarak işliyor fakat 
    // views ile app.js dosyan aynı klasörde olmalı 

app.get('/about', (request, response) => {
    response.status(200).render('about',  {baslik: 'Hakkimizda'}) 
})

app.get('/about-us', (request, response) => {
    response.status(302).redirect('/about')
})

app.get('/login', (request, response) => {
    response.render('login', {baslik: 'Giris Sayfasi'})
})

app.use( (request, response) => {
    response.status(404).render('404',  {baslik: 'Sayfa Bulunamadi'})
})

// .use ardından gelen fonksiyonları çalıştırmıyor 