//First Ts Example
/*var a: string = 'Test';
var b: number = 123;

function  example(numero: number, texto: string){
    console.log(texto, numero);
}

example(b,a);*/


import * as fs from 'fs';

var endereco : string = 'Teste 123';

fs.writeFile('arquivo.txt', endereco, (err)=>{
    if (err){
        console.log(err);
    }
    console.log('Arquivo Criado com Sucesso!');
});