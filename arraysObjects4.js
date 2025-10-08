// Ejercicio: Uso del método find en JavaScript

// 1. Crea un array de objetos que representen libros. Cada libro debe tener propiedades como título, autor, año y género

const libros = [
    {
        titulo: "Cien años de soledad",
        autor: "Gabriel García Márquez",
        año: 1967,
        genero: "Realismo mágico"
    },
    {
        titulo: "1984",
        autor: "George Orwell",
        año: 1949,
        genero: "Distopía"
    },
    {
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        año: 1943,
        genero: "Fábula"
    },
    {
        titulo: "Orgullo y prejuicio",
        autor: "Jane Austen",
        año: 1813,
        genero: "Romance"
    },
    {
        titulo: "Crónica de una muerte anunciada",
        autor: "Gabriel García Márquez",
        año: 1981,
        genero: "Novela"
    }
]; 

// 2. Crea una función para encontrar un libro por su título (ignorando mayúsculas/minúsculas)

function encontrarLibrotitulo(titulo){
    return libros.find(libro => libro.titulo.toLowerCase() === titulo.toLowerCase());
}

const libro1 = encontrarLibrotitulo("Crónica de una muerte anunciada");
console.log("Libroe encotrado por titulo: ", libro1 );
// 3. Crea una función para encontrar el primer libro de un autor específico

function encontrarLibroAutor(autor){
    return libros.find(libro => libro.autor === autor);
}

const libro2 = encontrarLibroAutor("Gabriel García Márquez");
console.log("Libro encotrado por autor: ", libro1 );

// 4. Crea una función para encontrar un libro que cumpla múltiples criterios (por ejemplo, autor y año)

function encontrarLibroPorCriterios(criterios){
    return libros.find(libro => {
        return Object.key(criterios).every(key => libro[key] === criterios[key])
    })
}

const libro4 = encontrarLibroPorCriterios({autor: 'Jane Austen', año: 1813})
console.log('Libro encontrado: ', libro4);

// 5. Intenta buscar un libro que no exista y muestra el resultado

const libroInexistente = encontrarLibrotitulo("Dune");
console.log("Este libro no está disponible: ", libroInexistente);