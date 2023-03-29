import app from "./app.js"
import {LISTEN_PORT } from './config.js'

app.listen(LISTEN_PORT)
console.log("server running in port", LISTEN_PORT)