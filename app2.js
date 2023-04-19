const { crearArch } = require ("./funciones/multiplicar");

console.clear();
const n1 = 9;
crearArch(n1)
    .then( fileName => console.log(fileName, 'Creado') )
    .catch( err => console.log(err) );

