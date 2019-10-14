const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');
const app =  express();
mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-smgni.mongodb.net:27017,omnistack-shard-00-01-smgni.mongodb.net:27017,omnistack-shard-00-02-smgni.mongodb.net:27017/semana09?ssl=true&replicaSet=Omnistack-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack-smgni.mongodb.net/semana09?retryWrites=true&w=majority',{
//     useNewUrlParser: true,
//     useUnifiedTopology: true,   
// })
//req.query = Acessar query params(para filtros)
//req.params = Acessar routes params (para edicao e delete)     
//req.body = Acessar corpo da requisicao(para criacao e edicao)
app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);





