// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function imprimirSumaNumeros() {
    // Imprime la suma de los números del 1 al 10
    // Pista: usa un acumulador
    // Tu código:
    var acum_ = 0;
    for (var i = 1; i <= 10; i++) {
      acum_= acum_ + i;
    }
    return acum_;
}

function encuentraPares(array){
  // Devuelve un arreglo con los pares encontrados
  // en el arreglo de enteros pasado como parámetro
  // Tu código:
  var arraypar = []
  
  for (var i=0; i <array.length; i++){
    if(array[i]%2 ===0){
      arraypar.push(array[i])
    }
  } return arraypar
}

function elevaAlCuadrado(array){
  // Devuelve un arreglo con cada número del array
  // elevado al cuadrado
  // Tu código:
  var arrary2 = []
  for(var i = 0; i<array.length; i++ ){
   arrary2.push(array[i]**2)   
  }
  return arrary2
}

function sumaArray(array){
  // Devuelve el resultado de sumar todos los elementos
  // de un arreglo de enteros dado
  // Tu código:
  let suma=0 
  for(var i = 0; i<array.length; i++ ){
    suma=suma + array[i]
  }
  return suma
  
  
}

function numeroDigitos(num){
  // Devuelve el número de dígitos de un número dado
  // Tu código:
  let digitos =String(num)
  return digitos.length
}
  
  
  // No modificar nada debajo de esta línea
  // --------------------------------
  
  
  module.exports = {
    imprimirSumaNumeros,
    encuentraPares,
    elevaAlCuadrado,
    sumaArray,
    numeroDigitos
  };
