// 1. Palíndromo de doble base
function esPalindromoDobleBase(numero) {
    var base10 = numero.toString();
    var base2 = convertirABinario(numero);
    
    return esPalindromo(base10) && esPalindromo(base2);
}

function esPalindromo(str) {
    var reverso = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reverso += str[i];
    }
    return str === reverso;
}

function convertirABinario(numero) {
    var binario = '';
    var n = numero;
    while (n > 0) {
        binario = (n % 2) + binario;
        n = Math.floor(n / 2);
    }
    return binario || '0';
}

// 2. Contar caracteres
function contarCaracteres(cadena) {
    var conteo = {};
    for (var i = 0; i < cadena.length; i++) {
        var caracter = cadena[i];
        if (conteo[caracter]){
            conteo[caracter]++;
        } else {
            conteo[caracter] = 1;
        }
    }
    return conteo;
}

// 3. Año bisiesto
function esBisiesto(año) {
    if ((año % 4 === 0 && año % 100 ) || año % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

//4. Suma de primos
function sumaPrimos(numero) {
    var suma = 0;
    for (var i = 2; i <= numero; i++) {
        if (esPrimo(i)) {
            suma += i;
        }
    }
    return suma;
}

function esPrimo(num) {
    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

//Conexion con el HTML
function verificarPalindromo() {
    var numero = document.getElementById('palindromoInput').value;
    var resultado = esPalindromoDobleBase(numero);
    document.getElementById('palindromoResultado').innerHTML = resultado ? "Es palindromo de doble base" : "No es palindromo de doble base"; 
}

function contarCaracteresEnCadena() {
    var cadena = document.getElementById('conteoInput').value;
    var resultado = contarCaracteres(cadena);
    var texto = '';
    for (var char in resultado) {
        texto += char + ': ' + resultado[char] + '<br>';
    }
    document.getElementById('conteoResultado').innerHTML = texto;
}

function verificarBisiesto() {
    var año = document.getElementById('bisiestoInput').value;
    var resultado = esBisiesto(parseInt(año));
    document.getElementById('bisiestoResultado').innerHTML = resultado ? "Es bisiesto" : "No es bisiesto";
}

function calcularSumaPrimos() {
    var numero = document.getElementById('primosInput').value;
    var resultado = sumaPrimos(parseInt(numero));
    document.getElementById('primosResultado').innerHTML = "La suma de primos hasta " + numero + " es: " + resultado;
}