import http from 'http'
import app from './server'

//const PORT = process.env.PORT || 3000;
let PORT = process.env.PORT || 3110;

const server = http.createServer(app)
let currentApp = app
server.listen(PORT, 'si-convert.herokuapp.com', () => console.log(`listening on port ${PORT}`));
if (module.hot) {
  module.hot.accept('./server', () => {
    server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
})
}