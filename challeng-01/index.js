const http = require('http')
const PORT = 3000

const server = http.createServer(handdleResponse)

server.listen(PORT, () => console.log(`Sever started at port: ${PORT}`))

function handdleResponse(request, response) {
  return response.end('Maratona Full Cycle 2.0')
}
