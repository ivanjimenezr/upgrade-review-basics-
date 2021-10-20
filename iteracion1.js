//Iteración #1: Mix for e includes
let categories = []
const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
for (value of movies) {
    let cat = value['categories']
    for (let i = cat.length -1; i >= 0; i--) {
        if (!categories.includes(cat[i])) {
            categories.push(cat[i]);
        }
    }
}
console.log(categories)