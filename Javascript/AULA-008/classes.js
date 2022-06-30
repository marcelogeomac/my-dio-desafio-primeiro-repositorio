/** Modo antigo **/
var Meal = function(food) {
    this.food = food;
}

Meal.prototype.eat = function() {
    return 'nice'
}

/** Modo Novo **/
class Meal {
    constructor(food) {
        this.food = food
    }

    eat() {
        return 'nice'
    }
}

//**Constructor */
class Animal {
    constructor(type = 'animal') {
        this.type = type
    }
    //**Getter e setter */
    get type() {
        return this._type
    }
    set type(val) {
        this._type = val.toUppercase()
    }
}

class Cat extends Animal {
    constructor() {
        super('cat') // super()
    }
    makeSound () { // Método
        super.makeSound()
        console.log('Meow!')
    }
}



