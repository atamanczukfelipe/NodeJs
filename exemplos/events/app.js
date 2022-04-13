import EventEmitter from 'events';

var emitter = new EventEmitter();

/*
//Setup do evento
emitter.on('meu_evento', ()=>{
    console.log('Meu evento foi acionado!');
});

//evento Inicializado
emitter.emit('meu_evento');*/

class Cao extends EventEmitter{
    latir(){
        console.log("Latindo....");
    }
}

var rex = new Cao();

rex.on('pessoa_na_porta', rex.latir);
//acionando o evento
rex.emit('pessoa_na_porta');
rex.emit('pessoa_na_porta');
rex.emit('pessoa_na_porta');
//removendo o listener
rex.removeListener('pessoa_na_porta', rex.latir);
rex.emit('pessoa_na_porta');