console.log("JS-02 funciones");

/*
 Las funciones permiten organizar, reutilizar y 
 estructurar el código. Su propósito principal es:

- Modularidad: Dividir un programa en piezas lógicas 
  más pequeñas y manejables.
- Reutilización de código: Reducir la duplicación de 
  código al reutilizar funciones.
- Legibilidad: Hacer que el código sea más claro y fácil de entender.
- Mantenimiento: Facilitar actualizaciones o modificaciones 
  al concentrar la lógica en un solo lugar.
- Abstracción: Ocultar detalles internos y expone 
  solo lo necesario para trabajar con ellas

  Recomendaciones para el uso de las funciones:

- Nombre descriptivo: Debe indicar claramente lo que hace.
  Se recomienda comenzar con un verbo
- Parámetros: Debe tener cero o más parámetros, separados por coma.
  Se recomienda no tener más de 3 parámetros.
- Seguir el principo SOLID, sobre el principio de responsabilidad única.
  (Single Responsibility Principle).
- Evitar efectos secundarios: Una función no debe modificar variables externas.

*/

// =======================================================================

/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions
----------- Funciones declaradas --------------
(function declaration, function statement)
Una característica de las funciones declaradas es que tien hoisting.

sintaxis:
function nombreFuncionCamelCase ( parámetros ){
    //cuerpo de la función
    instrucciones;
}

hoisting: comportamiento en JS que permite a las declaración de variables(var)
o funciones se eleven al comienzo de su ámbito antes de que se ejecute el código.

*/

function saludar( nombre){
  console.log("¿Qué musica te gusta? " +nombre);
}

saludar("Cris");//este puede ir arriba o abajo, 
// el programa correra normal

/*
 ------------ Funciones expresadas -----------------------
            (function expressions)
Son funciones declaradas dentro de la asignación de una variable.
Estas funciones pueden ser anónimas ( no tienen nombre ).
Las funciones expresadas no tiene hoisting, porque no se
carga en memoria hasta que se utilice.

sintaxis:
    
const nombreVariable = function nombreFuncion (parámetros){
  instrucciones;
};*/


const song = function (nombre, cancion){
  console.log(`Que buen gusto ${nombre}, a mi tambien me gusta el ${cancion}`);
};

song("cris","pop");//debe ir forzozamente abajo, 
// porque si nono puede leer el programa



/*
 Realizar una función declarada que sume dos números 
 y retorne el resultado.
 
 Realizar una función expresada que reste dos números 
 y retorne el resultado.
 
*/

suma (4,5);
//función declarada
function suma(a,b){
  return console.log(`el resultado de ${a} + ${b} es = ${a + b}`);
}

//función expresada
 const resta = function (x,y){
  return console.log(`el resultado de ${x} - ${y} es = ${x - y}`);
}

resta(10,3);


/*
 ------------ Funciones autoinvocadas -----------------------
             (selft-invoking functions)
Funciones que se autoinvocan, se pueden definir con funciones anónimas.

sintaxis:
   ( function (parámetros ){} )( argumentos );

*/

(function setUp(data){
  console.log("configuracion inicial de la app");
  console.log("valor de data "+data);
})(18);





/*
 ------------ Funciones flecha -----------------------
             (arrow functions)
Funciones similares a las funciones expresadas pero:
 - No requiere la palabra reservada function
 - Si tiene una solo instrucción no requiere las llaves {}
 - Si la instrucción es el mismo retorno, no requiere la palabra return

sintaxis:
    const nombreVariable = (parametros) => instrucción;

    const nombreVariable = (parametros) => {
        instrucción;
        return expresión;
    }
*/

//realizar una función declarada que calcule el área de un triángulo
//la función debe retornar el resultado

//realizar una función declarada que calcule el área de un triángulo
//la función debe retornar el resultado


//función declarada
function area(a, b) {
  return (a * b) / 2;
}
area(20,10);
console.log(`resultado en funcion declarada es: ${area(5, 10)}`);

//función expresada
const areaTr = function (altura,base){
  return (base * altura) / 2;
}
console.log(`resultado en funcion expresada es: ${areaTr(10,3)}`);

//función flecha
const area3 = (base, altura) => (base * altura)/2;
console.log(`resultado usando funcion flecha: ${area3(12,30)}`);

//funcion que calcule el area de un circulo y el resultado se imprima en un parrafo
/*
const circleArea = (radio) => Math.PI * radio ** 2;
const imprimirAreaCirculo = (radio) => document.getElementById("area-circulo").innerText = circleArea(radio);
imprimirAreaCirculo(5);
*/
/*
 ------------ Parámetros por defecto -----------------------
             (default parameters)
Inicializa un parámetro de la función, si no se envía el argumento cuando se invoca

*/

const saludarPersona = (nombre) => console.log(`hola ${nombre}, escuchemos lady gaga`);
saludarPersona();

console.log(parseInt("5"));
console.log(parseInt("1000"));
console.log(parseInt("1000",10));
console.log(parseInt("1000",2));
console.log(parseInt("D2042D"));
console.log(parseInt("D2042D",16));


/*
 ------------ Funciones de Callback -----------------------
 Es una función(definida, expresada, arrow, anónima) que se pasa 
 a otra función como argumento.
 Se pasa en el argumento como referencia ( sin parentesis).
 */

 const imprimirMensaje = ( fncCallBack ) => fncCallBack("Hola Ch54");
                                            // 18("Hola Ch54");
                                            // "patito"("Hola Ch54");
                                            // console.log("Hola Ch54");
                                            // undefined("Hola Ch54");
 // imprimirMensaje( 18 ); // fncCallBack is not a function
 // imprimirMensaje( "Patito" ); // fncCallBack is not a function
 imprimirMensaje( console.log ); // "Hola Ch54"
 // imprimirMensaje( console.log("Luis") ); //  fncCallBack is not a function
 // imprimirMensaje( undefined ); //  fncCallBack is not a function

 const enviarAParrafo = (mensaje) => {
  const saludar = "hola, buen dia";
  const referencia = document.getElementById("saludo-callback");
  referencia.innerHTML = `${saludar} ${mensaje}`;
 };
 // usando la función imprimirMensaje, enviar un callback para que imprima con alert
 imprimirMensaje(enviarAParrafo);
 //imprimirMensaje(alert);

/*
  Realizar una función que sume dos numeros y que imprima
  el resultado.
   - inicialmente se imprimirá en la consola
   - es posible que se te pida imprimir en el dom
   - es posible que se te pida imprimir en un alert
*/

const sumarDosNumeros = ( a, b) => a  + b;

/*
const sumarEImprimir = ( a, b , opcion = "consola") => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
    //imprimir en consola
   if( opcion === "consola") console.log(mensaje);
   else if (opcion === "parrafo") document.getElementById("resultado-sumatoria").innerText = mensaje;
   else if (opcion === "h2")document.getElementById("resultadoH2-sumatoria").innerText = mensaje;
   else alert(mensaje)
}
sumarEImprimir(10,14);//se imprimer en cosola
sumarEImprimir(50,50, "parrafo");//se imprimer en el parrafo
*/

const sumarEImprimir = ( a, b , imprimir = console.log) => {
   const resultado = sumarDosNumeros(a, b);
   const mensaje = `La suma de ${a} + ${b} es: ${resultado}`;
   imprimir(mensaje)
}
sumarEImprimir( 10, 14); // se imprimr en consola 
const imprimirEnDOMParagraph = (mensaje) =>{
  const refParagraph = document.getElementById("resultado-sumatoria");
  refParagraph.innerText = mensaje;
}
const imprimirEnDOMH2 = (mensaje) =>{
  const refParagraph = document.getElementById("resultadoH2-sumatoria");
  refParagraph.innerText = mensaje;
}
sumarEImprimir( 10, 14, imprimirEnDOMParagraph); // se imprime en paragraph
sumarEImprimir( 10, 14, imprimirEnDOMH2); // se imprime en h2
//sumarEImprimir( 10, 14, alert);


// -------------- Recursividad ---------------------
/*
  Una función recursiva es una función que se llama así misma durante su ejecución.

  Se utilizan en algoritmos y soluciones que se basan en la división y conquista
  como cálculos matemáticos, recorrido de estructura de datos y algoritmos de búsqueda
  y ordenamiento.

  Patrón:
    function nombreFuncionRecursiva( parametro  ){
        if( condicionParo){
            return expresión;
        }
        else {
            // llamada recursiva
            nombreFuncionRecursiva( nuevoParametro );
        }
    }
*/

// Calcular el factorial de un número
// factorial de 5: 5 * 4 * 3 * 2 * 1;
function factorialConCicloFor( numero ) {
    let factorial = 1;
    for (let i=0; i < numero; i++) {
      factorial *= (numero - i); // factorial = factorial * (numero - i);
      console.log(`i: ${i}, factorial: ${factorial}, numero: ${numero - i}` );
    }
    return factorial;
}
console.log(`El factorial de 5 es: ${factorialConCicloFor(5)}`); // 120


// calculando el factorial con recursividad

function factorialConRecursividad( numero ){
    console.log(`Resolviendo el factorial de ${numero}`);
    if( numero <= 1  ) return 1 ;    
    const result = factorialConRecursividad( numero - 1 ) * numero ;
    console.log(`El factorial de ${numero} es ${result}`);
    return result;
}
console.log(`Resultado final: ${ factorialConRecursividad(5)}`); // 120

/*
    parámetro   recursividad(n-1)   returnFnc
     5              5-1 = 4            120
     4              4-1 = 3            24 * 5 = 120
     3              3-1 = 2            6 * 4 = 24      
     2              2-1 = 1            2 * 3 = 6        
     1               ----              1 * 2 = 2
  
*/

/*
Gnerar una funcion recursiva que muestre en consola un saludo 
donde se indique el numero de saludos deseados

 ej: saludar 10 veces
  Saludo 1
  Saludo 2
  Saludo 3
  Saludo 4
  Saludo 5
  Saludo 6
   ....
  Saludo 10
*/


function saludoConRecursividad( numeroSaludos){
  if(numeroSaludos <= 0) return numeroSaludos;
  const result = saludoConRecursividad(numeroSaludos - 1 ) ;
  console.log(`Saludo ${numeroSaludos}`);
}
saludoConRecursividad(10);