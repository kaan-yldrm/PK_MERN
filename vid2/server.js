const http = require('http')
const fs = require('fs')
const { each, values, keysIn, keys } = require('lodash')

const server = http.createServer((req, res) => {
    console.log(req.url, req.method)
    res.setHeader('Content-Type', 'text/html')
    /* res.write('<h1><title>PK_MERN_STACK</title></h1>')  // sekme adına Title yazar
    res.write('<h1>merhaba</h1>')                       // sayfa içine Header yazar
    res.end() */


    let path ='./vid2/'
    switch (req.url) {
        case '/':
            path += 'index.html'
            break

        case '/about':
            path += 'about.html'
            break
        
        case '/about-us':
            res.statusCode = 301
            res.setHeader('Location', '/about')
            break

        default:
            path += '404.html'
            res.statusCode = 404
            break
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end()
        } else {
            res.write(data);
            res.end()
        }
    })
})

const port = process.env.port || 3000;

server.listen(port, () => {
    console.log("Online")
})


let numers = [29,31,32,35]

each(numers, (val, keysIn) => {
    console.log(val, keysIn)
}
)