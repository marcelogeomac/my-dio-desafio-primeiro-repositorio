const soma = function (a, b) {
    return a + b;
}

soma(1, 2)
soma(5, 4)

/** Callbacks **/

const calc = function( operacao, num1, num2){
    return operacao(num1, num2);
}

const somal = function(num1, num2){
    return num1 + num2
}

const sub = function(num1, num2) {
    return num1 - num2; 
}

const resultSoma = calc(soma, 1, 2);
const resultSub = calc(sub, 1, 2);

console.log(resultSub); // -1
console.log(resultSoma); // 3

/** Parâmetros **/

// Valores padrao

// Pré-ES2015
 function exponencial(array, num) {
    if (num === undefined) {
        num = 1;
    }
 
 const result = [];

 for (let i = 0; i < array.length; i++) {
    result.push(array[i] ** num);
 }

 return result;
}

exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]

// Prós-ES2015
function exponencial(array, num = 1) {
    const result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(array[i] ** num);
    }
    return result;
}
exponencial([1, 2, 3, 4])
// [1, 2, 3, 4]
exponencial([1, 2, 3, 4], 4)
// [1, 8, 27, 64]

// Objeto "arguments"
function findMax() {
    let max = -Infinity;

    for(let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}

// Arrays
function sum(x, y, z) {
    return x + y +z;
}
const numbers = [1, 2, 3];
console.log(sum(...numbers)); // Spread

function confereTamanho(...args) { // Rest
    console.log(args.length)
}

confereTamanho() // 0
confereTamanho(1, 2) // 2
confereTamanho(3, 4, 5) // 3

// Objetos: Object Destructuring
const user = {
    id: 42,
    displayName: 'João',
    fullName: {
        firstName: 'Mauri',
        lastName: 'Flink'
    }
};

function userId({id}) {
    return id;
}
function getFullName({fullName: {firstName: first, lastName: last}}) {
    return `${first} ${last}`;
}

userId(user)
// 42
getFullName(user)
// João Mauri Flink

// Loops
