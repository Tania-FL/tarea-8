//EJERCICIO 1//
function convertirANumero (valor) {
    try {
        let numero = Number(valor);
        

        if (isNaN(numero)) {
            throw new Error("El valor no se puede convertir a número.");
        }
        
        return numero;
    } catch (error) {
        return error.message;
    }
}

console.log(convertirANumero("582")); 
console.log(convertirANumero("aei")); 
console.log(convertirANumero("1215.25"));
console.log(convertirANumero(""));
console.log(convertirANumero(null)); 

//EJERCICIO 2 //

function procesarCadena(cadena) {
    if (cadena === '') {
        throw new Error('La cadena no puede estar vacía.');
    }
    return `La cadena tiene ${cadena.length} caracteres.`;
}

try {
    console.log(procesarCadena('¿En que puedo ayudarte?')); 
    console.log(procesarCadena('')); 
} catch (error) {
    console.error(error.message); 
}