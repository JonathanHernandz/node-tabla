// const { argv } = require('process');
const {crearArchivo} =  require('./helpers/multiplicar');
// const { option, options } = require('yargs');

const argv = require('./config/yargs')
const colors = require('colors/safe');


console.clear()

// console.log(process.argv);
// console.log(argv);

// console.log('base: yargs',argv.b)

// const [,,arg3 = 'base=1'] = process.argv;
// const [,base] = arg3.split('=')


// const base = 3;

crearArchivo(argv.b, argv.l,argv.h)
    .then(nombreArchivo =>  console.log(colors.white.underline(nombreArchivo, 'creado')))
    .catch(err => console.log(err))
    