

class Operaciones {

    constructor(){
        console.log("Bienvenido a tu calculadora fav")
    }

    suma(num1, num2){
        this.resultado = num1+num2
    }

    resta(num1, num2){
        this.resultado = num1-num2
    }

    multiplicacion(num1,num2){
        this.resultado = num1*num2
    }

    division(num1, num2){
        this.resultado = num1/num2
    }

}



let op =  new Operaciones()

op.suma(5,5)
console.log(op.resultado)

op.resta(5,5)
console.log(op.resultado)

op.multiplicacion(5,5)
console.log(op.resultado)

op.division(5,5)
console.log(op.resultado)




class Animal{

    constructor(raza, color, nombre, sexo="NO ESPECIFICADO"){
        this.raza = raza
        this.color = color
        this.nombre = nombre
        this.sexo = sexo
    }


    getInfo(){
        return {
            "raza": this.raza,
            "color": this.color,
            "nombre": this.nombre,
            "sexo": this.sexo
        }
    }


}


let a = new Animal("Perro", "Marron","Juan Alberto")
console.log(a.getInfo())




console.log("---METODOS ESTATICOS----")

class Calculadora {

    static suma(num1, num2){
       console.log(num1+num2)
    }

    static resta(num1, num2){
        console.log(num1-num2)
    }

    static multiplicacion(num1,num2){
        console.log(num1*num2)
    }

    static division(num1, num2){
        console.log(num1/num2)
    }

}

Calculadora.suma(5,5)
Calculadora.resta(5,5)
Calculadora.multiplicacion(5,5)
Calculadora.division(5,5)

console.log("---PROPIEDADES ESTATICAS----")


class Persona{

    #nombre
    #apellidos
    #edad

    static toObjet(){
        return {
            "nombre": this.nombre,
            "apellidos": this.apellidos,
            "edad": this.edad,
        }

    }

    static print(){
        console.log("Nombre: "+ this.nombre)
        console.log("Apellidos: "+this.apellidos)
        console.log("Edad: "+this.edad)
    }
}




Persona.nombre = "Edgar"
Persona.apellidos = "Lopez Calomarde"
Persona.edad = 21

Persona.print()
console.log(Persona.toObjet())
console.log(JSON.stringify(Persona.toObjet()))

console.log("-------------GET-Y-SET----------------")


class Coche {

    constructor(m){
        this._matricula = m
    }

    set matricula(nombre){
        this._matricula =nombre
    }

    get matricula(){
        return this._matricula
    }

}



let c = new Coche("4P0RN")
console.log(c.matricula)
c.matricula = "7UWU7"
console.log(c.matricula)


console.log("-------------------------PROTOTYPE---------------------")

/*
function Student(){
    this.nombre ="Ivan"
    this.age 
    this.gender = "Home"
}


let s = new Student()
s.age = 5
console.log(s.age)


let s2 = new Student()
console.log(s2.age)

*/



function Student(){
    this.nombre ="Ivan"
    this.age 
    this.gender = "Home"
}

Student.prototype.age = 150

let s = new Student()
console.log(s.age)


let s2 = new Student()
console.log(s2.age)

/*
Cada objeto que se crea usando sintaxis literal o sintaxis de constructor con la
palabra clave new, incluye una propiedad __proto__ que apunta al objeto
prototipo de la función que creó este objeto.

*/

console.log(Student.prototype) //Object
console.log(s.prototype)//Undefined
console.log(s.__proto__)//Object

console.log(typeof s.__proto__)//Object
console.log(typeof Student.prototype)//Object


console.log(s.__proto__ == Student.prototype)//Object



let student3 = new Student()

let proto = Object.getPrototypeOf(student3)
proto.age = 21
console.log(student3.age)

console.log(student3.hasOwnProperty())
console.log(proto.age.isPrototypeOf(student3))
