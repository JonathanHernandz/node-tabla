const fs = require('node:fs');
const colors = require('colors/safe');




const crearArchivo = async(base = 1, listar = false, hasta) =>{
    try {
        let salida = '';
        let consola = '';
        for(let i = 1; i <= hasta; i++){
            consola += `${base} ${colors.green('x')} ${i} = ${base*i}\n`;
            salida += `${base} ${'x'} ${i} = ${base*i}\n`;

        }
        if(listar){
            console.log(colors.red("=========================="));
            console.log(colors.green('      LA TABLA DEL '),base);
            console.log(colors.red("=========================="));
            console.log(salida);
            
        }
    
        fs.writeFileSync(`./salida/tabla-${base}.txt`,salida);
    
        return (`tabla-${base}.txt`)
        
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}