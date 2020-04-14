const { createServer } = require('http')
const PORT = 1234
const handleServer = require('./api')
const handleListen = () => console.log(`Listening on ${PORT}...`)

createServer((req, res) => {
  handleServer(req, res)
}).listen(PORT, handleListen)
