//imports necessarios
import * as http from 'http';
import * as fs from 'fs';
import * as pdf from 'html-pdf';


//server setup
const server = http.createServer((req,res)=>{
    var html = fs.readFileSync('./index.html');

    //options do pdf
    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    //criação do pdf, passando o conteudo e as opções
    pdf.create(html.toString(), options).toBuffer((err, buffer)=>{
        if(err) return res.status(500).json(err);
        res.end(buffer);
    });
});


server.listen('3000', ()=>{
    console.log("Server Running on port 3000");
})