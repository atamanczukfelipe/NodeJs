//First Ts Example
/*var a: string = 'Test';
var b: number = 123;

function  example(numero: number, texto: string){
    console.log(texto, numero);
}

example(b,a);*/


import * as fs from 'fs';

fs.writeFile('arquivo.txt', 'Teste escrita de arquivo', (err)=>{
    if (err){
        console.log(err);
    }
    console.log('Arquivo Criado com Sucesso!');
});