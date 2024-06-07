const espresso = require('express');

const meuServidor = espresso();
meuServidor.use(espresso.json());

const rotasUsuarios=require('./controlador/controladorUsuarios');
meuServidor.use(rotasUsuarios);

const rotasEndereco=require('./controlador/controladorEnderecos');
meuServidor.use(rotasEndereco);

const rotasInfoEscolar=require('./controlador/controladorInfoEscolar');
meuServidor.use(rotasInfoEscolar);

const rotasMateria=require('./controlador/controladorMateria');
meuServidor.use(rotasMateria);

meuServidor.listen(4300, () => {
    console.log('Meu primeiro servidor na porta 4300.');
});
