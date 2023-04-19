const argv = require('yargs')
    .option('n', {
        alias: 'n1',
        type: 'number',
        demandOption: true
    })
    .check( (argv, options) => {
        if ( isNaN( argv.n ) ) {
            throw 'La base tiene que ser un numero.'
        }
        return true;
    })
    .options({
        'n': {
          alias: 'n1',
          demandOption: true,
          describe: 'Numero base de la tabla de multiplicar',
          type: 'number'
        },
        'l': {
            alias: 'listar',
            type: 'boolean',
            describe: 'Valor true o false que muestra la tabla en consola',
            default: false
        },
        'h': {
            alias: 'hasta',
            type: 'number',
            describe: 'Valor rango de valores a multiplicar por la base',
            default: 1
        }
      })
    .argv;

    module.exports = argv;