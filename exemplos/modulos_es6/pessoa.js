var pessoa = {
    nome: 'Felipe',
    idade: 30,
    andar(){
        console.log('Andou...');
    }
}

var a =10;
var b = 4;

function soma(){
    return a+b;
}

export{
    pessoa,
    soma,
    a,
    b
};