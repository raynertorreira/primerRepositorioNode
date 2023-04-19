const fs = require('fs');


const crearArch = async( n1 = 7, l = false, h = 2 ) => {
    //let n2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let salida = '';    
    // n2.forEach(element => {
    //     res = n1 * element;
    //     salida += `${n1} x ${element} = ${res}\n`;
    // });

    for (let i = 0; i < h; i++) {
        res = n1 * (i+1);
        salida += `${n1} x ${i+1} = ${res}\n`;
        
    }

    try {
        if (l) {
            console.log('============================');
            console.log(`       Tabla del ${n1}`)
            console.log('============================');           
            console.log(salida);
        }
    } 
    catch (err) {
        throw err;
    }


    fs.writeFileSync(`./salidas/tabla-x${n1}.txt`, salida);
    return `tabla-x${n1}.txt`;

}

module.exports = {
    crearArch
};