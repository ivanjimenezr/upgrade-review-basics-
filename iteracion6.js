//Iteración #6: Función swap
let words = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
function swap(array, index1, index2) {
    if(words[index1] !== undefined && words[index2] !== undefined){
        console.log("Los valores son correctos");
        [words[index1], words[index2]] = [words[index2], words[index1]];
        console.log(words)
    } else{
        console.log("Los valores no existen en la lista")
    }
}
swap(words, 3,2)







