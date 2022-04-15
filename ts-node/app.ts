import { appendFile } from "fs/promises";

var data: string = 'Typescript Test'

appendFile('my_file.txt', data).then((a) =>{
    console.log('Arquivo criado ou atualizado com Sucesso!');
}).catch((e) => {
    console.log('Erro: ',e );
});