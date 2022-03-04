// Anatomía de una función:
function miFuncion(/*Argumentos (cada argumento se separa con , (coma)*/) {
    return (/*Declaración que permite extraer información desde dentro de la función cuando se invoque*/)
}
    // Invocación de una función:
    miFuncion(/*Argumentos definidos*/);

'-----------------------------------------------------------------------------------------------------------------------------------------'
// Anatomía operador if: 
if (/*Condiciónes*/) {

} else if (/*Condiciónes*/){

} else {

}

'-----------------------------------------------------------------------------------------------------------------------------------------'
// Anatomía bucle for: 
for (/*Se introducen declaraciones: 1. Declaramos una variable; 2. Expresión condicional; 3. Inclemento variable*/) {
    '1. Se define la variable de iteración'; 
    '2. Se determina el limite de iteración'; 
    '3. Se define la forma en varia luego de cada ciclo la variable definida'
}

'-----------------------------------------------------------------------------------------------------------------------------------------'
// Anatomía array (variables contenedoras de datos): 
var array = ['Dato 0', 'Dato 1', 'etc.'];
            // Los datos se separan con , (coma). Y están numerados según su orden en la matriz (empezando de 0).
    // Métodos de array:
        // 1_ .forEach: bucle que recorre cada elemento de un array
            array.forEach(function(elemento, indice)){ // La función anonima entre parentesis es un callback
                                                       // El segundo argumento ,"indice", es un elemento opcional.
            }
        // 2_ .reduce: recorre cada elemento de un array y los agrupa reduciendolos a un solo elemento
        array.reduce(function(acc, elemento), acumuladorDeArranque){ // El argumento "acc" funciona como acumulador de los elementos ya recorridos
          return // Siempre debe estar                               // El acumulador de arranque es opcional (empieza desde este elemento, si existe)
        } // Devuelve acc
        // 2_ .map: de igual funcionamiento y estructura que .forEach, salvo que devuelve un array
        array.map(function(elemento, indice)){
            // El segundo argumento ,"indice", es un elemento opcional.
        } // Devuelve un array;
'-----------------------------------------------------------------------------------------------------------------------------------------'
// Anatomía objetos (variables contenedoras de datos): 
var objeto = {
            clave1 : valor1, 
            cleve2 : valor2, 
            claveN : valorN
            }
            // Los datos se separan con , (coma), excepto el último valor agregado.
    // Acceder a datos de objetos (se pueden utilizar cualquera de las tre opciones siguientes):
    objeto.claveN;
    objeto['claveN'];
    var clave = 'claveN';
    objeto[clave];
    // Modificar a datos de objetos (se pueden utilizar cualquera de las tre opciones siguientes):
    objeto.claveN = otroValorN;
    objeto['claveN'] = otroValorN;
    var clave = 'claveN';
    objeto[clave] = otroValorN;
    // Eliminar clave:
    delete objeto.claveN;
    // Bucles for con objetos:
    for (clave in objeto){
        'Para cada clave en (in, palabra clave) el objeto'
    }

// Anatomía Métodos (funciones guardadas dentro de objetos):
var objeto = {
    metodo: function(){

    }
}
                                                        //VER this (JSIV)
'-----------------------------------------------------------------------------------------------------------------------------------------'
// Anatomía clases (por convención se nombran en mayúscula): 
    // 1º Anatomía: Función constructora
    function Clase (valor){ // Cada uno de los "valores" se denominan "objetos de clase"??
        this.clave = valor, // Se pueden separar las distintas thi.clave con ';' 
                            // pero es mas intuitivo mantener la notación de arrays y objetos (separar elementos con ',').
    }
    // 2º Anatomía : Clase (de ES6)
    class Clase{
        constructor (valor) {
        this.clave = valor, //"this." es reemplazado por "valor." cuando la clase es instanciada.
        }
    }   

    // Instancia:
    var valorInstanciado = new Clase(//Se ingresa el parametro que reemplaza a "".this");
// Al crear un objeto instanciando al constructor, el objeto hereda la propiedad __proto__ que oficia de link al constructor.prototype
    // prototype: Creo que permite establecer un mecanismo a través del cual métodos creador heredan propiedades de objetos de clase.
    Clase.prototype.prototipo = function(){
        // Se establece la funcionalidad del método heredando objetos de clase a través de "this.clave".
    }
        // Invocación:
        var invocación = new Clase(valor);
        invocación.prototipo(); // Se ejecuta el metodo de prototype.
'-----------------------------------------------------------------------------------------------------------------------------------------'

// Anatomía Callback (funciones que poseen a otra función como argumento): 
    // 1º Anatomía: Función constructora
    function callback(argumento, cb){ // "argumento" es el argumento de la función llamada. "cb" variable usada como callback
       return cb(argumento); 
    }
    '-----------------------------------------------------------------------------------------------------------------------------------------'