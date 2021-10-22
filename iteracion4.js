//Iteración #4: Métodos findArrayIndex
let words = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']

function findArrayIndex(array, text) {
    if (array.includes(text)){
        console.log('La posición de la palabra "'+text+'" es: '+array.indexOf(text));
    }else {
        console.log('La palabra "'+text+'" no está en la lista')
    }
}
findArrayIndex(words, 'Ajolote');