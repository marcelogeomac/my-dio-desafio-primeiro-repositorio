function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parâmetros");

        if (typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Object");
    
        if (typeof arr !== 'number') throw new TypeError("Array precisa ser do tipo Number");
    
        if (arr.length !== num) throw new RangeError("Tamanho Inválido!");

        return arr;
    }
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("Este erro é um Reference Error!")
            throw e;
        } else if (e instanceof TypeError) {
            console.log("Este erro é um Type Error!")
            throw e;
        } else if (e instanceof RangeError) {
            console.log("Este erro é um RangeError!")
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }

    }

    console.log(validaArray());
    

}