const { createServer } = require('http')
const PORT = 1234
const handleServer = require('./screenshot')
const handleListen = () => console.log(`Listening on ${PORT}...`)
createServer(handleServer).listen(PORT, handleListen)
