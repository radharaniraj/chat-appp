const socket = io()
socket.on('message',(message)=>{
    console.log(message)
})
document.querySelector('#message-form').addEventListener('submit',(e)=>{
e.preventDefault()
const message = e.target.elements.message.value
socket.emit('sendMessage',message)
})
/*socket.on('countupdated',(count)=>{
    console.log('the count has been updated',count)
})
document.querySelector('#increment').addEventListener('click',()=>{
    console.log('clicked')
    socket.emit('increment')
})*/
