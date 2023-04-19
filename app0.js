
console.clear();
console.log('============================');
console.log('******  Tabla del 5  *******')
console.log('============================');


const n1 = 5;
let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

n2.forEach(element => {
    res = n1 * element;
    console.log(`${n1} x ${element} = ${res}`);
});