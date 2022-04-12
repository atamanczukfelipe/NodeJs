import * as http from 'http';

/*
//Server Construction
const server = http.createServer((req, resp)=> {
    resp.writeHead('200', {'Content-Type': 'text/html'});
    resp.write('<h1>Teste</h1>');
    resp.end();
});

//Server Init
server.listen('3000', ()=>{
    console.log('Servidor Inicializado na porta 3000');
});*/



//Server Construction com urls
const server = http.createServer((req, resp)=> {
    resp.writeHead('200', {'Content-Type': 'text/html'});
    var url = req.url;
    if(url === '/sobre'){
        resp.write('<h1>Sobre Teste</h1>');
        resp.end();
    }else if(url === '/contato'){
        resp.write('<h1>Contato Test</h1>');
        resp.end();
    }
    else{
        resp.write('<h1>Teste</h1><br><a href="/sobre">Sobre</a><br><a href="/contato">Contato</a>');
        resp.end();
    }
});

//Server Init
server.listen('3000', ()=>{
    console.log('Servidor Inicializado na porta 3000');
});