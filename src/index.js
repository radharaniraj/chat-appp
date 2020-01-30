const path = require('path')
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const app = express()
const server = http.createServer(app)
const io= socketio(server)
const port = process.env.PORT||3000
const publicDirectoryPath = path.join(__dirname,'../public')
app.use(express.static(publicDirectoryPath))

io.on('connection',(socket)=>{
console.log('new websocket connection');
socket.emit('message','welcome');
socket.on('sendMessage',(message)=>{
    io.emit('message',message)
})
/*socket.emit("countupdated",count)
socket.on('increment',()=>{
    count++;
    io.emit("countupdated",count)
})*/
})
server.listen(port,()=>{
    console.log("web server starting on server"+port)
})