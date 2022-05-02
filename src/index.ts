// Ingresar por teclado el tiempo de cada vuelta

let tiempoDeVuelta1: number = Number(prompt("INGRESE TIEMPO DE VUELTA:"));
let tiempoDeVuelta2: number = Number(prompt("Ingrese tiempo de vuelta:"));
let tiempoDeVuelta3: number = Number(prompt("Ingrese tiempo de vuelta:"));
let tiempoDeVuelta4: number = Number(prompt("Ingrese tiempo de vuelta"));

//El programa debe retornar el tiempo total y el promedio de vuelta//

let sumaDeTiempos : number = (tiempoDeVuelta1 + tiempoDeVuelta2 + tiempoDeVuelta3 + tiempoDeVuelta4);
console.log("El teimpo Total de Vueltas es de:" , sumaDeTiempos " minutos");
let promedioDeVueltas: number = (sumaDeTiempos)/4;
console.log("El promedio de Vuelta es de:", promedioDeVueltas "minutos");




