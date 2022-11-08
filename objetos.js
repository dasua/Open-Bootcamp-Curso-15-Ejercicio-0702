// Open Bootcamp Curso 15 Ejercicio 7.2
// Open-Bootcamp-Curso-15-Ejercicio-0702
/**
 * Crea un archivo llamado objetos.js que contenga las siguientes líneas
 *
 * - [x] Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
 * - [x] Una variable que obtenga tu edad a partir del objeto anterior
 * - [x] Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s
 * - [x] Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
 */

const yoMismo = {
    nombre: 'Jesús', apellido: 'Guerreiro', edad: 49, altura: 183, eresDesarrollador: true
}
console.log('yoMismo: ', yoMismo)

const edad = yoMismo.edad
console.log('edad: ', edad)

// Estrictamente, lo que dice el enunciado del punto 3. Array con dos objetos, el primero con los datos del primero creado
// Un segundo objeto con los datos (en formato objeto) de otras dos personas.
const objetoConDatosPersonalesYObjetoConDatosPersonalesDeAmigos = [
    yoMismo,
    {
        amigo1: {
            nombre: 'Fulanito', apellido: 'Meganido', edad: 99, altura: 210, eresDesarrollador: false,
        },
        amigo2: {
            nombre: 'Jhon', apellido: 'Doe', edad: 1, altura: 200, eresDesarrollador: true,
        },
    },
];
console.log('objetoConDatosPersonalesYObjetoConDatosPersonalesDeAmigos: ',objetoConDatosPersonalesYObjetoConDatosPersonalesDeAmigos)

// Para ordenar lo del punto 3, entiendo que lo que se pedía era un array de tres objetos.
const varianteDeListaDeDatosPersonalesParaOrdenar = [
    yoMismo,
    {nombre: 'Fulanito',apellido: 'Meganido',edad: 99,altura: 210,eresDesarrollador: false},
    { nombre: 'Jhon', apellido: 'Doe', edad: 1, altura: 200, eresDesarrollador: true, },
];
console.log('varianteDeListaDeDatosPersonalesParaOrdenar: ',varianteDeListaDeDatosPersonalesParaOrdenar);

// Nueva variable ordenada por edad, pero sin modificar la original
let datosOrdenadosPorEdad = [...varianteDeListaDeDatosPersonalesParaOrdenar];
console.log('datosAntesDeOrdenar: ',datosOrdenadosPorEdad);
datosOrdenadosPorEdad.sort((a,b) => a.edad - b.edad);
console.log('datosOrdenadosPorEdad: ',datosOrdenadosPorEdad);
console.log('varianteDeListaDeDatosPersonalesParaOrdenar: ',varianteDeListaDeDatosPersonalesParaOrdenar);
