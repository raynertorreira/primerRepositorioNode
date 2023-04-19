const fs = require('fs');


const n1 = 3;
let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let salida = '';


console.clear();
console.log('============================');
console.log(`******  Tabla del ${n1}  *******`)
console.log('============================');





n2.forEach(element => {
    res = n1 * element;
    salida += `${n1} x ${element} = ${res}\n`;
    //console.log(`${n1} x ${element} = ${res}`);
});

console.log(salida);
fs.writeFileSync(`tabla-x${n1}.txt`, salida);
console.log(`tabla-x${n1}.txt ha sido creada.`);