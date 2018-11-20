import http from 'http'
import app from './server'

const PORT = 3000;

const server = http.createServer(app)
let currentApp = app
server.listen(PORT, () => console.log(`listening on port ${PORT}`));
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
})
}