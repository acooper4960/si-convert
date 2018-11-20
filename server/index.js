import http from 'http'
import app from './server'

const PORT = 3000;

const server = http.createServer(app)
let currentApp = app
server.listen(process.env.PORT || PORT, () => console.log(`listening on port ${process.env.PORT || PORT}`));
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
})
}