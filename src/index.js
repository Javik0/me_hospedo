const app = require ('./app');

app.get('/',(request,response)=>{
    response.send('<h1>ya funciona</h1>');
})
app.post('/postMetodo',(request,response)=>{
    response.send('<h1>ya funciona modulo2/h1>');
})
app.put('/putMetodo',(request,response)=>{
    response.send('<h1>ya funciona modulo2/h1>');
})
app.delete('/deleteMetodo',(request,response)=>{
    response.send('<h1>ya funciona modulo2/h1>');
})
//IMPORTAR RUTAS


//CONFIGURACION PUERTO
app.set('port', process.env.PORT||8080);

// INICIAR EL SERVIDOR
app.listen(app.get('port'), () => {
            console.log(`Server en puerto ${app.get('port')}`);
});