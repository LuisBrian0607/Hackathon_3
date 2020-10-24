/*Crea tu propia función forEach que funcione igual a Array.forEach. Por
ejemplo: function miForEach(arreglo, callback){ // completa aquí }*/

console.log('*******Ejercicio1*************')

let numeros=[4,6,8,10];

function miForEach(dato){
    dato();
}

miForEach(()=>{
    for(let num of numeros){
        console.log(num*2);
    }
})

