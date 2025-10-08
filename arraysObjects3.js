// Ejercicio: Manejo de objetos en JavaScript

// 1. Crea un objeto que represente a un estudiante, con propiedades como nombre, edad, carrera, materias y calificaciones

const estudiante = {
    nombre: "Juan",
    edad: 20,
    carrera: "Ingeniería",
    materias: ["Matemáticas", "Física", "Programación"],
    calificaciones: {
        matematicas: 90,
        fisica: 85,
        programacion: 95
    }
};

// 2. Accede y muestra algunas propiedades del objeto

console.log("Nombre: ", estudiante.nombre);

// 3. Modifica una propiedad del objeto

estudiante.edad = 36;
console.log("Edad modificada: ", estudiante.edad);

// 4. Añade una nueva propiedad al objeto

estudiante.email = "juanito@mail.com";
console.log("Email: ", estudiante.email);

// 5. Recorre todas las propiedades del objeto usando un bucle for...in

for (let propiedad in estudiante) {
    console.log(propiedad + ": ", estudiante[propiedad]);
}

// 6. Crea un método dentro del objeto que realice alguna acción (por ejemplo, presentar al estudiante)

estudiante.presentar = function (){
    console.log("Hola, soy " + this.nombre);
}

// 7. Llama al método que creaste

estudiante.presentar();

// 8. Crea un array de objetos, donde cada objeto represente a un estudiante diferente

const estudiantes = [
    {
        nombre: "Juan",
        edad: 20,
        carrera: "Ingeniería"
    },
    {
        nombre: "Ana",
        edad: 34,
        carrera: "Diseño"
    },
    {
        nombre: "Carmen",
        edad: 40,
        carrera: "Desarrollo Web"
    }
];

// 9. Recorre el array de objetos e imprime información de cada estudiante

estudiantes.forEach(est => {
    console.log(est.nombre + " Edad: " + est.edad + " Carrera: " + est.carrera)
})

// 10. Busca un estudiante por su nombre dentro del array y muestra la información si lo encuentras

const nombreBuscado = "Ana";
const estudianteEncontrado = estudiantes.find(est => est.nombre === nombreBuscado);

if (estudianteEncontrado) {
    console.log("Estudiante encontrado: " + estudianteEncontrado);
} else {
    console.log("Estudiante no encontrado");
}