// Ejercicio: Recorrer arrays con for y forEach en JavaScript

// 1. Crea un array de números con varios valores

const numeros = [1, 2, 3, 4, 5];

// 2. Recorre el array con un bucle for e imprime cada elemento

console.log("Recorrido con for: ");
for (let i = 0; i < numeros.length; i++){
    console.log(numeros[i]);
}

// 3. Recorre el array con forEach e imprime cada elemento

console.log("Recorrido con forEach: ");
numeros.forEach(num => {
    console.log(num)
})

// 4. Calcula la suma de los números usando un bucle for

console.log("Suma For: ");
let sumaFor = 0;
for (let i = 0; i < numeros.length; i++){
    sumaFor += numeros[i];
}
console.log(sumaFor);

// 5. Calcula la suma de los números usando forEach

console.log("Suma ForEach: ");
let sumaForEach = 0;
numeros.forEach(num => {
    sumaForEach += num;
});
console.log(sumaForEach);

// 6. Crea un nuevo array con los números pares usando un bucle for

const numerosParesFor = [];
for (let i = 0; i < numeros.length; i++) {
    if (numeros [i] % 2 === 0){
        numerosParesFor.push(numeros[i]);
    }
}
console.log("Números pares usando For: ", numerosParesFor);

// 7. Crea un nuevo array con los números pares usando forEach

const numerosParesForEach = [];
numeros.forEach(num => {
    if (num % 2 === 0){
        numerosParesForEach.push(num);
    }
});
console.log("Números pares usando ForEach: ", numerosParesForEach);