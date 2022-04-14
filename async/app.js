import * as fs from 'fs';

console.time('Async');
var counter = 0;


//Async
for(var i =0; i < 1000; i ++){
    fs.readFile('my_file.txt', (err, data) =>{
        if(err){
            return console.error(err);
        }
        counter ++;
        console.log('Async' + data.toString());

        if(counter === 1000){
            console.timeEnd('Async');
        }
    });
}

//344.075 ms -> Async

//Sync

console.time('Sync');
for(var i = 0; i < 1000; i++){
    var data = fs.readFileSync('my_file.txt');
    console.log('Sync' + data.toString());
}

console.timeEnd('Sync');

//622.531 ms -> Sync