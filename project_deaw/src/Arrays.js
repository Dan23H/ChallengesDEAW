// at() function es para "elegir" en el espacio definido:
let array0 = [1,2,3,4,5,6]
console.log('at():',array0.at(2));
/* Aquí mostraría el número 3 como resultado... Sería como decir: "El valor dentro del Array en la posición 2",
se puede utilizar números negativos para hacer el índice desde el final al inicio */

// concat() function es para combinar arrays:
let array1_1 = [1,2,3];
let array1_2 = [4,5,6];
console.log('concat():',array1_1.concat(array1_2));
// Aquí mostraría como resultado un nuevo array con los valores "[1,2,3,4,5,6]"

// La función constructor de array es: 'Array()' y sirve para crear arreglos de forma más complicada.
let array2_1 = new Array('A', 'b', 3)
console.log(array2_1)
// Devolverá en la consola: Array ['A', 'b', 3]
let array2_2 = Array(4)
console.log(array2_2)
// Devolverá en la consola: Array [undefined, undefined, undefined, undefined]

/* La sintaxis de la función copyWithin es:
Array1.copyWithin(target)
Array1.copyWithin(target, start)
Array1.copyWithin(target, start, end) 
*/
let array3 = ['a','b','c','d','e'];
console.log(array3.copyWithin(3,0,2));
/* Aquí mostraría como resultado los valores ['a','b','c', 'a','b'], lo que indicaría que cambió los
valores desde la posición 3 los valores desde la posición 0 y 2... si no especifico la "finalización"
de la función, entonces se asumirá que copia hasta el final del array */
console.log(array3.copyWithin(0,3));
// Donde duplica todo lo que hay desde la posición 3 en adelante pero en la posición 0 del array.
            
// La función 'entries()' es un iterador... No puede mostrarse directamente en la consola, es un complemento.
let array4 = ['a', 'b', 'c'];
let iterator1 = array4.entries();
console.log(iterator1.next().value);
// Arrojará el primer valor junto al índice de la forma: [0, "a"]
console.log(iterator1.next().value);
// Si se repite, arrojará el siguiente valor junto al índice de la forma: [1, "b"]

// La función 'every()' trabaja como un loop.
let funcion = (a) => a > 1;
let array5 = [2,6,3,8,5];
console.log(array5.every(funcion));
/* Esto ejecuta la función en todos los valores del array y da un resultado global... En este caso
la función verifica si todos los valores son mayores a 1. Retornará como resultado: true */

/* La sintaxis de la función fill() es:
fill(value)
fill(value, start)
fill(value, start, end)
*/ 
// Fill() sirve para repetir un solo resultado desde y hasta un índice.
let array6 = [1,2,3,4,5,6]
console.log(array6.fill(0,3,4));
// Llenará desde la posición 3 hasta la 4 con el valor 1

/* Filter() crea un shallow copy de un array, filtrando únicamente los elementos que pasen el test implementado 
por la función. */
const array7 = ['Tomate','Naranja','Guanabana','Banano','Uva','Pera','Manzana','Sandía']
const resultado = array7.filter(palabra => palabra.length > 6);
console.log(resultado);
//Debería dar como resultado ["Naranja","Guanabana,"Manzana"]

// Find() retorna el primer elemento que satisfaga la condicion de la función. Si no lo hace, retornará un 'undefined'.
const array8 = [4, 0, -4, 2, 9, 16, 20, 90, 364, 80, 10, 9]
console.log(array8.find(test => test > 10))
// Se espera que retorne el número 16 solamente

// Retorna la posición dentro del array del primer elemento que satisfaga la condición de la función. 
// Si ningún valor cumple la condición, retornará -1.
const array9 = [4, 0, -4, 2, 9, 16, 20, 90, 364, 80, 10, 9]
console.log(array9.findIndex(test => test > 10))
// En este caso retornaría el número 6 (posición en el array)

// findLast() funciona como el find, pero invirtiendo su orden de búsqueda desde el último valor hacia el primero... 
// Invierte su orden de búsqueda y devuelve el primer valor que cumpla la condición.
const array10 = [4, 0, -4, 2, 9, 16, 20, 90, 364, 80, 10, 9]
console.log(array10.findLast(test => test > 10))
// Devolvería en este caso el valor 80.

// findLastIndex() funciona como el findIndex pero invirtiendo su orden de búsqueda.
// Hay que tener en cuenta que el número del index no cambia sólo por que se haya invertido el orden de búsqueda.
const array11 = [4, 0, -4, 2, 9, 16, 20, 90, 364, 80, 10, 9]
console.log(array11.findLastIndex(test => test > 10))
// En este caso, devolvería la posición 9.

// Flat() crea un nuevo arreglo con todos los elementos o sub-arreglos concatenados dentro de el.
const array12_1 = [0,1,2,[3,4]]
console.log(array12_1.flat());
// Devolvería en la consola: Array [0, 1, 2, 3, 4]
const array12_2 = [0,1,2,[[[3,4]]]]
console.log(array12_2.flat());
// Devolvería en la consola: Array [0, 1, 2, Array [3, 4]]

/* flatMap() mapea primero cada elemento usando la función map() y luego crea un nuevo arreglo con todos los elementos 
concatenados dentro de el usando flat(). Es ligeramente más eficiente que usarlos por separado. */
const array13 = [[1, 2, 3], [4, 5], 6, [7], 8, 9, [10], []]
console.log(array13.flatMap(variable => variable))
/* Devolvería en la consola: Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Se puede utilizar también operaciones dentro del map: array13.flatMap(variable => variable * 2) pero en este caso,
devolvería NaN en los índices donde hay arreglos. */

// forEach() ejecuta una función especificada a cada elemento del array (una sola vez)
const array14 = [1,2,3]
array14.forEach(variable => console.log(variable * 2))
// Devolvería 3 mensajes de consola: > 2, > 4, > 6

/* includes() verifica si el argumento dentro del paréntesis está dentro del arreglo.
De ser cierto devuelve True, de lo contrario False. La condición de la función es similar a 'x === y'. */
const array15 = ["Algo", 2, "Tercero"]
console.log(array15.includes("2"))
// Devolvería false.
console.log(array15.includes(2))
// Devolvería true.
console.log(array15.includes("algo"))
// Devolvería false.

/* indexOf() devuelve el índice del valor indicado. De no encontrarlo, devolverá -1. 
Se puede especificar donde comienza la búsqueda con un segundo atributo, sin embargo si el valor del segundo atributo
es negativo, entonces, se buscará por todo el arreglo. */
const array16 = [2, 6, 8, 10, "A", "b", "C"]
console.log(array16.indexOf(10))
// Devolvería 3.
console.log(array16.indexOf("a", -1))
// Devolvería -1.

/* join() combina a todos los elementos en un String y los separa por el valor determinado.
Si no se especifica, los elementos del arreglo seran separados por comas. */
const array17 = ["Elemento1", "Elemento", "Numeros:", 4, "y", 5]
console.log(array17.join('/'))
// Devolvería en la consola el texto: "Elemento1/Elemento/Numeros:/4/y/5"
console.log(array17.join(' '))
// Devolvería en la consola el texto: "Elemento1 Elemento Numeros: 4 y 5"

/* keys() devuelve como un nuevo objeto un Iterador que contiene la clavez de índice con las que acceder a
cada elemento del arreglo. */
const array18 = ["a", "", 3]
const iterador = array18.keys()
for (const llave of iterador) {
            console.log(llave)
}
// Devolvería en la consola 3 mensajes: > 0, > 1, > 2

/* lastIndexOf() recorre todo el arreglo y devuelve el índice del último elemento que cumpla con el criterio de búsqueda.
En caso de no encontrarlo, devolverá el valor -1. */
const array19 = ["A","B","A","C","D","B"]
console.log(array19.lastIndexOf("B"))
// Devolvería 5.

// length() retorna el tamaño de un arreglo
const array20 = [1, 3, 4, 9, "", "2"]
array20.length()
// Devolvería 6.

// map() crea un nuevo arreglo con los resultados de la función aplicada a todos los elementos del mismo.
const array21 = [2, 4, 6, 8]
console.log(array21.map(x => x / 2))
// Retornará: Array [0.5, 2.5, 5, 7.5].

// pop() Elimina el último elemento de un arreglo y lo devuelve. También cambia la longitud del arreglo.
const array22 = [1, 2, 3, '4']
console.log(array22.pop())
// Devolverá en la consola: '4'.
console.log(array22)
// Devolverá en la consola: Array [1, 2, 3]

// push() Añade elementos al final del array. También cambia la longitud del arreglo.
const array23 = [1, 2, 3]
console.log(array23.push('4'))
// Devolverá en la consola: '4'.
console.log(array23)
// Devolverá en la consola: Array [1, 2, 3, "4"]

// reduce() Ejecuta una función sobre cada elemento del arreglo, devuelve un valor único.
const array24 = [1, 3, 5, 7, 9]
console.log(array24.reduce((a, b) => {return a + b})) 
// Devolverá en la consola: 25. ((((1 + 3) + 5) + 7) + 9)

// reduceRight() funciona como el reduce() pero aplica la función de derecha a izquierda.
const array25 = [0, 1, 2, 3, 4]
console.log(array25.reduceRight((a, b) => {return a * b}))
// Devolverá en la consola: 0. (0 * (1 * (2 * (3 * 4))))

// reverse() invierte el orden de los elementos de un arreglo y después hace que el arreglo original copie los resultados.
const array26_1 = [1, 3, 5, 7, 9]
const array26_2 = array26_1.reverse()
console.log(array26_2, ' vs ', array26_1)
// Devolverá en la consola 2 mensajes iguales: Array [9, 7, 5, 3, 1]

// shift() elimina el primer elemento del arreglo. También cambia la longitud del arreglo.
const array27 = [1, 2, 3, 4]
console.log(array27.shift())
// Devuelve en la consola: Array [2, 3, 4]

// slice() retorna el mismo arreglo desde un índice específico hasta el final.
const array28 = [1, 2, 3, 4, 5, 6]
console.log(array28.slice(3))
// Devolverá en la consola: Array [4, 5, 6]

// some() comprueba si al menos un elemento del arreglo cumple con la condición.
const array29 = [1, 2, 3, 4, 5]
console.log(array29.some(x => x * 2 === 6))
// Devolverá en la consola: true.

// sort() ordena los elementos del arreglo según el Unicode.
const array30 = ['A', 'a', 3, 'Gd', 'cGI']
console.log(array30.sort())
// Devolverá como resultado: Array [3, "A", "Gd", "a", "cGI"].

/* Sintaxis:
            array.splice(indice inicial, contador de eliminación, valor1, valor2, ...)
*/
/* splice() cambia el contenido eliminando y/o agregando nuevos elementos. Crea un nuevo arreglo (sin reemplazar el 
anterior con los valores eliminados en cada splice() */
const array31_O = [1, 3, 4, 6]
const array31_R = array31_O.splice(1, 0, 2)
console.log("Elementos: [" + array31_O + "], Elementos eliminados: '" + array31_R + "'")
// Devolverá como resultado: "Elementos: [1,2,3,4,6], Elementos eliminados: ''"

// toString() devuelve todos los elementos del arreglo como si fuera de tipo String separados por comas.
const array32 = ['Texto', 1, 'sin', 'espacios.']
console.log(array32.toString())
// Devolverá: "Texto,1,sin,espacios."

// unshift() agrega uno o más elementos al inicio del arreglo. También cambia la longitud del arreglo.
const array33 = [1, 2, 3]
console.log(array33.unshift(1, 2))
// Devolverá como resultado: [1, 2, 1, 2, 3]

// values() devuelve un nuevo objeto Iterador que contiene los valores para cada índice.
const arrayFinal = ['a', 'r', 'r', 'a', 'y']
var i = arrayFinal.values()
for (let digito of i) {
            console.log(digito)
}
// Devolverá 5 mensajes en la consola con cada una de las letras: > "a" > "r" > "r" > "a" > "y".
