import {appendFile} from 'fs/promises';

appendFile('my_file2.txt', ' Teste de Arquivo novo').then((a) => {
    console.log('Arquivo criado ou atualizado com sucesso!');
}).catch((e) => {
    console.log('Erro : ', e);
})
