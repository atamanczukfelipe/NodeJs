import * as fs from 'fs';

// cria novo arquivo
// fs.writeFile('arquivo.txt', 'Teste escrita de arquivo', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('Arquivo Criado com Sucesso!');
// });

//adiciona conteudo a arquivo ja existente
// fs.appendFile('arquivo.txt', 'Conteudo Adicionado via AppendFile', (err)=>{
//     if (err){
//         console.log(err);
//     }
//     console.log('Arquivo Atualizado com Sucesso!');
// });

//leitura de arquivo existente
fs.readFile('arquivo.txt', (err, data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});