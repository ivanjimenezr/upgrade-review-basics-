//Iteración #3: Mix Fors

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let favorites = [];
for (let key in users) {
    let objetosGroup = Object.keys(users[key]['favoritesSounds']);
    for (value of objetosGroup){
       favorites.push(value)
    }
}
let newList = [];
for (var objeto of favorites) {
    if (!newList.includes(objeto)){
        newList.push(objeto);
    }   
}
for (var object2 of newList) {
    let newObject = object2;
    let number = 0;
    for (var objeto2 of favorites) {
        if (newObject === objeto2) {
            number += 1;
        }
    }
    console.log(newObject+' se repite '+number+' veces')
}