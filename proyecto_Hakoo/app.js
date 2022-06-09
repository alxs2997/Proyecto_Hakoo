const express = require('express');
const app = express();  

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Hi to Hakoo Store');
})

app.listen(3000,()=>{
    console.log("Servidor en el puerto 3000...");
})