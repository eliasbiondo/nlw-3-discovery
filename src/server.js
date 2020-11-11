// libraries import
const express = require('express');
const path = require('path');
const pages = require('./pages.js')

// express init
const server = express()

server

    //utilizando o body da requisição
    .use(express.urlencoded({extended: true}))

    // utilizando os arquivos estaticos
    .use(express.static('public'))

    // template engine config
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

    // application routes
    .get('/', pages.index)
    .get('/index', pages.index)
    .get('/add-orphanage', pages.addOrphanages)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .post('/save-orphanage', pages.saveOrphanage)


// server init
server.listen(process.env.PORT || 3000)