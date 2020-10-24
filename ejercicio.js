/*Crea tu propia función forEach que funcione igual a Array.forEach. Por
ejemplo: function miForEach(arreglo, callback){ // completa aquí }*/

console.log('*******Ejercicio1*************')

let numeros = [4, 6, 8, 3, 9, 10];

function miForEach(dato) {
    dato();
}

miForEach(() => {
    for (let num of numeros) {
        console.log(num * 2);
    }
})

/*Crea tu propia función map que funcione igual a Array.map. Por ejemplo:
function miMap(arreglo, callback).*/
console.log('*******Ejercicio2*************')

function miMap(operacion) {
    operacion();
}

miMap(() => {
    for (let num of numeros) {
        if (num % 2 == 0) {
            console.log('el numero es par');
        } else {
            console.log('el numero es impar');
        }
    }
})

console.log('*******Ejercicio3*************')
/*Crea tu propia función filter que funcione igual a Array.filter. Por ejemplo:
function miFilter(arreglo, filter).*/
let resultado = [];


function miFilter(selector) {
    selector();
}

miFilter(() => {
    for (let num of numeros) {
        if (num > 6) {
            resultado.push(num);
        }
    }
    console.log(resultado);
})

console.log('*******Ejercicio4*************')
/*Crea tu propia función reduce que funcione igual a Array.reduce. Por
ejemplo: function miReduce(arreglo, reduce).*/

function miReduce(suma) {
    suma();
}

miReduce(() => {
    let a = 0;
    for (let num of numeros) {
        a = a + num;
    }
    console.log('el total del arreglo es:' + a);
})

console.log('*******Ejercicio5*************')
/*Crea tu propia función sort que funcione igual a Array.sort. Por ejemplo:
function miSort(arreglo, callback).*/
function miSort(array, callback) {
    return (callback(array));
}

function newSort(array) {
    let aux;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] > array[j + 1]) {
                aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }
    return array;
}
console.log(miSort(numeros, newSort));

console.log('*******Ejercicio6*************')
/*Crea una función usando callbacks, que reciba una condición, y dos
funciones que se realicen en caso la condición se cumpla o no.*/


let pagar = function (deuda) {
    console.log('Su deuda de: ' + deuda + ' ha sido cancelada');
}

let interes = function (deuda) {
    console.log('Su interes es del:' + deuda * 0.25 + 'a la fecha actual');
}

function caja(pago_recibido) {
    pago_recibido();
}

caja(() => {
    let monto = 850;
    let respuesta = true;
    if (respuesta) {
        pagar(monto);
    } else {
        interes(monto);
    }
})

console.log('*******Ejercicio7*************')
/*Crea una función usando callbacks que haga el incremento de valores en
un array (aumentar en uno cada elemento del array). */

let edades=[14,15,16,17,18];

function incrementador(callback){
    callback();
}

incrementador(()=>{
    for(let ini of edades){
        console.log(`Su edad para el año siguiente sera: ${ini+1}`);
    }
})

console.log('*******Ejercicio8*************')
/*Crea una función usando callbacks que eleve al cuadrado y al cubo un
numero enviado como parámetro a dicha función.*/

function cuadrado(numero){
    console.log(Math.pow(numero,2));
}
function cubo(numero){
    console.log(Math.pow(numero,3));
}

function potenciacion(callback,valor){
    callback(valor);
}

potenciacion(cuadrado,4);
potenciacion(cubo,3);