import { createServer } from 'http'
import handleServer from './api'

const PORT = 1234

const handleListen = () => console.log(`Listening on ${PORT}...`)

createServer((req, res) => {
  handleServer(req, res)
}).listen(PORT, handleListen)
