const server = require ('./server');

server.get('/',(request,response)=>{
    response.send('<h1>ya funciona</h1>');
})
server.post('/postMetodo',(request,response)=>{
    response.send('<h1>ya funciona modulo2/h1>');
})
server.put('/putMetodo',(request,response)=>{
    response.send('<h1>ya funciona modulo2/h1>');
})
server.delete('/deleteMetodo',(request,response)=>{
    response.send('<h1>ya funciona modulo2/h1>');
})

server.listen(8080, () => {
        console.log('Server en puerto 8080')
           
})