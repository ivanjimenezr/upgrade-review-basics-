//Iteración #2: Mix Fors
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

for (value of users) {
    let totalVolume = []
    let favorite = value['favoritesSounds']
    let name = value['name']
    for (let key in favorite) {
        totalVolume.push(favorite[key]['volume'])
    }
    let suma = 0;
    for(let x = 0; x < totalVolume.length; x++){
        suma += totalVolume[x];
        }
        let promedio = suma / totalVolume.length;

    console.log('El promedio de '+name+' es '+Math.round(promedio))
    
}