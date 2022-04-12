import * as http from 'http';


//Server Construction
const server = http.createServer((req, resp)=> {
    resp.writeHead('200', {'Content-Type': 'text/html'});
    resp.write('<h1>Teste</h1>');
    resp.end();
});

//Server Init
server.listen('3000', ()=>{
    console.log('Servidor Inicializado na porta 3000');
});