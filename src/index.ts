import express from "express"

const meuServidor = express();

meuServidor.listen(4300, () => {
    console.log('Servidor do Projeto está RODANDO!!');
});