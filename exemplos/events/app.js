import EventEmitter from 'events';

var emitter = new EventEmitter();


//Setup do evento
emitter.on('meu_evento', ()=>{
    console.log('Meu evento foi acionado!');
});

//evento Inicializado
emitter.emit('meu_evento');