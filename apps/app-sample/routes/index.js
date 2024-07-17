'use strict'

const router = require('express').Router()

// const websocket = require('@es-labs/node/services/websocket') // .open(null, null) // or set to null
// websocket.setOnClientMessage = async (data, , isBinary ws, _wss) => { }
// websocket.setOnClientCLose =  (ws) => { }

// export your routes here - make sure no clashes
module.exports = ({ app, routePrefix }) => {
  app.use(routePrefix,
    router.use('/', require('./base')), // http://127.0.0.1:3000/api/app-sample/
    router.use('/categories', require('./categories')), // http://127.0.0.1:3000/api/app-sample/categories/
    router.use('/webhooks', require('./webhooks')),
    router.use('/sse', require('./sse')),
    router.use('/tests', require('./tests')), // for tests
    router.use('/webpush', require('./webpush')),
    router.use('/fido', require('./fido')),
  )
}
