//Promisses Example - Simple One

/*const p = new Promise((resolve, reject) => {
    try{
        resolve('Ok');
    }catch (e){
        reject(e);
    }
});

p.then((parametros) =>{
    console.log('Sucesso', parametros)
}).catch((erro) => {
    console.log('erro')
});*/


//Promisses Examples - With Files

import * as fs from 'fs';


function read(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            try{
                //se tudo ok -> Resolve
                resolve(data.toString());
            }catch{
                //se erro -> Reject
                reject('Erro');
            }
        });
    });
}

read('my_file.txt').then((data) =>{
    console.log(data);
}).catch((err) => {
    console.log(err);
});
