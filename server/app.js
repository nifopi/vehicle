const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();

// Middleware
app.use(bodyParser.json());
app.use(cors());
// Arquivos staticos
app.use(express.static(__dirname + '/public'))
const rest= require('./routes/restfull');
app.use('/',rest);

// servidor porta
const port= process.env.port || 3000;
app.listen(port,()=>console.log(`Servidor escutando porta ${port}`))