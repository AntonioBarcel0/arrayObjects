// Ejercicio: Uso del método map en JavaScript

// 1. Crea un array de números

const numeros = [1, 2, 3, 4, 5];

// 2. Utiliza map para duplicar cada número del array

const numerosDuplicados = numeros.map(num => num * 2)
console.log(numerosDuplicados)

// 3. Crea un array de objetos que representen productos (con propiedades nombre y precio)

const productos = [
    {nombre: "Camiseta", precio: 20},
    {nombre: "Pantalón", precio: 50},
    {nombre: "Falda", precio: 30}
]

// 4. Utiliza map para crear un array solo con los nombres de los productos

const nombresProductos = productos.map(producto => producto.nombre)
console.log((nombresProductos))

// 5. Utiliza map para aplicar un descuento del 10% a todos los productos y crear un nuevo array con el precio original y el precio con descuento

const productosConDescuento = productos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: producto.precio,
        descuento: producto.precio * 0.5
    }
})

const productosConDescuento2 = productos.map(producto => ({
    ...producto,
    precioConDescuento: producto.precio * 0.3
    }));

console.log(productosConDescuento)
console.log(productosConDescuento2)

// 6. Crea un array de strings con nombres

const nombres = [
    "ana", "jjuan", "Pepe"
]

// 7. Utiliza map para capitalizar la primera letra de cada nombre

const nombreCapitalizado = nombres.map(nombre => nombre[0].toLocaleUpperCase() + nombre.slice(1))
console.log(nombreCapitalizado)

// 8. Crea una función que formatee un número como moneda

function formatearConMoneda(numero){
    return numero.toFixed(2) + " euros"
}

let num = 3.14159;
console.log(num.toFixed(4))

// 9. Utiliza map junto con la función de formateo para formatear un array de precios

const precios = [20, 50, 30]
const preciosFormateados = precios.map(precio => formatearConMoneda(precio))
console.log(preciosFormateados)

// 10. Utiliza map tomando también el índice de cada elemento para mostrar un mensaje que incluya el número y su índice

const numerosConIndice = numeros.map((num, indice) => {
    return "Número: " + num + ", Índice: " + indice;
})

console.log(numerosConIndice)