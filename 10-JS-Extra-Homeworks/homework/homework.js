// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var matriz =[];
  for(var clave in objeto) {
    matriz.push([clave, objeto[clave]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var objeto = {};
  for(var i = 0; i < string.length; i++) {
    if (objeto.hasOwnProperty(string[i])){
      objeto[string[i]]++;
    } else {
      objeto[string[i]] = 1;
    }
  }
  return objeto;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var capInFront = '';
  for(var i = 0; i < s.length; i++) {
    if (s.charAt(i) === s.charAt(i).toUpperCase()){
      capInFront= capInFront + s[i];
    }
  }
  for(var i = 0; i < s.length; i++) {
    if (s.charAt(i) !== s.charAt(i).toUpperCase()){
      capInFront= capInFront + s[i];
    }
  }
  return capInFront;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var strArray = str.split(' ')
  var invertidaArray= [];
  var strinvertida = '';
  for (let i = 0; i < strArray.length; i++) {
    for (let j = strArray[i].length - 1; j >= 0; j--) {
      strinvertida= strinvertida + strArray[i].charAt(j);
    }
    invertidaArray.push(strinvertida);
    strinvertida = '';
  }
  var fraseInvertida = '';
  for (let i = 0; i < invertidaArray.length; i++) {
    if (invertidaArray[i] !== invertidaArray[invertidaArray.length -1]) {
    fraseInvertida = fraseInvertida + invertidaArray[i] + ' ';
    } else {
      fraseInvertida = fraseInvertida + invertidaArray[i];
    }
  }
  return fraseInvertida;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var mirror = '';
  var numeroString = numero.toString();
  for (var i = numeroString.length -1 ; i >= 0; i--){
    mirror = mirror + numeroString[i];
  }
  if (mirror === numeroString){
  return 'Es capicua';
  } else {
    return 'No es capicua'
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinABC= '';
  for (var i = 0; i < cadena.length; i++)
  if (cadena[i] !== 'a' && cadena[i] !== 'b' && cadena[i] !== 'c'){
    sinABC = sinABC + cadena[i]
  }
  return sinABC;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrOrd = [];
  var lengthArr = arr.length;
  for (let i = 0; i < lengthArr; i++) {
    var smallerStr = arr[0];
    var restArray = [];
    for (let j = 0; j < arr.length; j++) {
      if (arr[j].length < smallerStr.length){
      smallerStr = arr[j];
      }
    }
    arrOrd.push(smallerStr);
    for (let k = 0; k < arr.length; k++) {
      if (arr[k] !== smallerStr){
        restArray.push(arr[k]);
      }
    }
    arr = restArray;
  } 
  return arrOrd; 
} sortArray(["You", "are", "beautiful", "looking"]); 

 

function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};