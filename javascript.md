

# Apuntes Javascript


## Arrays

### Conceptos basicos 
Declarar un array:

````javascript
let fruits = ["Manazanas", "Naranjas", "Peras"]
````
Acceder a los elementos del array:

````javascript
fruits[0] //Manazanas
````

Declarar un array multidimensional:
````javascript
let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
````
<br>

### Bucles
````javascript
for(let fruta in fruits){
    console.log(fruta); //0,1,2 ->Indice
}  

for(let fruta of fruits){
    console.log(fruta); //"Manazanas", "Naranjas", "Peras" -> Value
}
````
<br>


### Metodos

**length** 

Devuelve la longitud del array:

````javascript
fruits.length //3 
````

**push** 

Agrega un elemento al final del array:

````javascript
fruits.push("Mandarinas") //["Manazanas", "Naranjas", "Peras","Mandarinas"]
````

**pop** 

Elimina el ultimo elemento del array y lo devuelve:

````javascript
fruits.pop() // "Peras" ["Manazanas", "Naranjas"]
````

**shift** 

Elimina el primer elemento del array y lo devuelve:

````javascript
fruits.shift() //"Manazanas" ["Naranjas", "Peras"]
````

**unshift** 

Agrega un elemento al principio del array:

````javascript
fruits.unshift("Uvas") //["Uvas","Manazanas", "Naranjas", "Peras"]
````

**splice** (Navaja suiza)

Sintaxis:

    arr.splice(index[, deleteCount, elem1, ..., elemN])

Ejemplo:

````javascript
let fruits = ["Manazanas", "Naranjas", "Peras"]
fruits.splice(1,1) //["Manzanas","Naranjas"]
fruits.splice(1,1,"Limones","Patatas") //["Manzanas","Naranjas","Limones","Patatas"]
fruits.splice(0,0,"Tomates","Jamon Iberico") //["Tomates","Jamon Iberico","Manzanas","Naranjas","Limones","Patatas"]
fruits.splice(-1,0, "Piedra caliza") //["Tomates","Jamon Iberico","Manzanas","Naranjas","Limones","Patatas","Piedra caliza"]
fruits.splice(0,fruits.length) //[]
````

**slice**

Devuelve una nueva matriz copiando los elementos de un punto x a un punto y:

Sintaxis:

    arr.slice([start], [end])

Ejemplo:

````javascript
let arr = ["u","w","u","o"]

arr.slice(0,2) //u,w
arr.slice(-2) //u,o
````

**concat**

Genera un nuevo array que incluye valores de otros array y elementos adicionales:

````javascript
let arr = [1, 2];
arr.concat([3, 4]) // 1,2,3,4
arr.concat([3, 4], [5, 6]); // 1,2,3,4,5,6
````

**forEach**

Iterar cada elemento:

Sintaxis:

    arr.forEach(function(item, index, array) {
   
    });

Ejemplo:

````javascript
let nombre = ["edgar","nerea","ivan","pau","raquel","camila","pablo"]

nombre.forEach(n=>{
    console.log(n)
})

nombre.forEach((n,i, nombres)=>{
    console.log(`Me llamo ${n} me encuentro en la posicion ${i} del array: ${nombres}`)
})
````


**indexOf, lastIndexOf e includes**

Buscar en arrays:



arr.indexOf(item) //Busca de izquierda a derecha y en caso de encontrar el elemento lo devuelve y si no devuelve -1.

arr.lastIndexOf(item) igual, pero busca de derecha a izquierda.

arr.includes(item)//Devuelve true o false en caso de encontrar o no el elemento en el array


Ejemplo:

````javascript
let arr = [1, 0, false];
arr.indexOf(0)//1
arr.lastIndexOf(10)//-1
arr.includes(false)//true
````

<br>


**find, findIndex**

Sintaxis:

    let result = arr.find(function(item, index, array) {
        // if true is returned, item is returned and iteration is stopped
        // for falsy scenario returns undefined
    });


Ejemplo:

````javascript
let users =[
    {id:1,name:"Edgar",age:21},
    {id:2,name:"Pau",age:20},
    {id:3,name:"Ivan",age:1000000}
]
    
console.log(users.find(user=> user.id == 1))//Devuelve el elemento
console.log(users.findIndex(user=> user.id == 1)) //Devuelve el index
````   

**filter**

Sintaxis:

    let result = arr.filter(function(item, index, array) {
      
    });


Ejemplo:

````javascript
let users =[
    {id:1,name:"Edgar",age:21},
    {id:2,name:"Pau",age:20},
    {id:3,name:"Ivan",age:1000000}
]

console.log(users.filter(user=>user.id >=2)) //Array de elementos
````

**map**

Transforma directamente un array para devolver la transformacion en un array.

Sintaxis:

    let result = arr.map(function(item, index, array) {
      
    });

Ejemplo:

````javascript
let numeros = [1,2,3,4,5,6,7,8,9,10]

console.log(numeros.map(n=>n*7)) //Tabla del 7 en array
````

**sort**

Ejemplo:

````javascript
let arr = [1,15,2,70]
       
console.log(arr.sort())  //1,15,2 ->Porque ordena por string
function compareNumeric(a,b){
    if(a>b) return 1;
    if(a==b) return 0;
    if(a<b) return -1;
}

console.log(arr.sort(compareNumeric)) //Ordena Numericamente
console.log(arr.sort((a,b)=>a-b)) //Ordena Numericamente
````

**reverse**

Invierte el orden de los elementos:

````javascript
let arr = [1,2,3,4,5]
console.log(arr.reverse)//[5,4,3,2,1]
````

**split,join**

Split -> Divide una cadena en  un array  atraves de un delimitador

Ejemplo:

````javascript
let nombres = "Paco,Jesus,Pedro"
console.log(nombre.split(",")) //["Paco","Jesus","Pedro"]
let str = "uwu"
console.log(str.split("))["u","w","u"]
````

Join -> Hace lo contrario al split

Ejemplo:

````javascript
let razas = ["terrier","bulldog"]
let str =razas.join(";")
console.log(str) //terrier;bulldog
````

**Array.isArray**

Ejemplo:


````javascript
let arr =[1,2,3,4]
let arr2 =1

console.log(arr.isArray())
console.log(arr2 .isArray())
````

## Objetos


Creacion de objetos:

````javascript
let user ={
    name: "Ivan",
    lastName: "Doe",
    age:1000000,
    "big daddy": true
}

console.log(user.name)
console.log(user.lastName)
console.log(user.age)
console.log(user["big daddy"])
````

Modificar propiedades de objetos:

````javascript
const user = {
    name: "Beto"
}

user.name = "Edgar"

console.log(user)

delete user.name

console.log(user)
````


## CLASES 


