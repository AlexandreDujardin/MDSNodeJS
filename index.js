const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Ceci est la réponse de mon serveur')
})

server.listen(3000)