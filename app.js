const { crearArch } = require ("./funciones/multiplicar");
const argv = require ('./config/yargs');

console.clear();

//console.log(process.argv);
//console.log(argv);
// console.log('n1: yargs', argv.n1);
// console.log(n1);

// const [ , , dato3 = 'n1=7' ] = process.argv;
// const [ , n1 ] = dato3.split('=');

//const n1 = 9;
const {n, l, h} = argv;
console.log(n + ' ' + l + ' ' + h);
crearArch(n, l, h)
    .then( fileName => console.log(fileName, 'Creado') )
    .catch( err => console.log(err) );



