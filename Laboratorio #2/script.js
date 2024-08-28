console.log("2do Problema:")
var num1 = 10;
var num2= 5;
console.log("Suma:", num1 + num2);
console.log("Resta:", num1 - num2);
console.log("Multiplicacion", num1 * num2);
console.log("Division", num1 / num2);

console.log("3er Problema:")
let texto1 = "Hola";
let texto2 = " Mundo";
console.log("Concatenacion:", texto1 + texto2);

console.log("4to Problema:")
const numero = 42;
const texto = "JavaScript";
console.log("Tipo de dato de numero:", typeof numero);
console.log("Tipo de dato de texto:", typeof texto);

console.log("5to Problema:")
const miObjeto = {
    numero: 100,
    texto: "Este es string",
    booleano : true,
    objetoVacio: {}
};
console.log("Objeto:", miObjeto);

console.log("6to Problema:")
function sumaMultiplos(numero) {
    let suma = 0;
    for(let i = 1; i < numero; i++){
        if (i % 3 === 0 || i % 5 === 0){

        }
    }
    return suma;
}
console.log("Suma de multiplos de 3 a 5 menores que 10:", sumaMultiplos(10));
