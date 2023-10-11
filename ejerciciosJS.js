//Ejercicio 1
//Dado un array de objetos, obtener el objeto con el id 3

const arrNames = [
    {id: 1, name: 'Pepe'},
    {id: 2, name: 'Juan'},
    {id: 3, name: 'Alba'},
    {id: 4, name: 'Toby'},
    {id: 5, name: 'Lala'}
  ]
/*
for (let i=0; i<arrNames.length; i++){
    if (arrNames[i]['id'] == 3){
        console.log(arrNames[i]);
    }
}*/

const newArr = arrNames.filter(name => name.id == 3);
console.log("Resultado ejercicio 1", newArr);

//Ejercicio 2
//Dado un array de valores, devolver un array truthy (sin valores nulos, vacíos, no números, indefinidos o falsos)

const arrDirty = [NaN, 0, 5, false, -1, '',undefined, 3, null, 'test'];
const arrTruthy = [];//Declaro un nuevo array

for (let i=0; i<arrDirty.length; i++){
    if (typeof arrDirty[i] === 'string' && arrDirty[i] != "" || typeof arrDirty[i] === 'number' && arrDirty[i] >= 0){//Compruebo que son tipo string y no vacíos
        arrTruthy.push(arrDirty[i]); //Los introduzco en mi nuevo array
    }
}

console.log("Resultado ejercicio 2", arrTruthy);//Muestro el array

//Ejercicio 3
//Dado un array de ciudades, sacar todas las ciudades de España que no sean capitales

const arrCities = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Paris', country: 'France', capital: true},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Rome', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ];

  const noCap = arrCities.filter(capital => capital.capital === false);//filtro los objetos que cumplen la condición
  const nameCity = noCap.map(city => city.city);//Solo muestro la ciudad de los objetos obetnidos anteriormente
  console.log("Resultado ejercicio 3", nameCity);
  

  //Ejercicio 4
  //Dado tres arrays de números, sacar en un nuevo array la intersección de estos.
  
  const arrNumber1 = [1,2,3];
  const arrNumber2 = [1,2,3,4,5];
  const arrNumber3 = [1,4,7,2];
  
  const interseccion = arrNumber1.filter(valor => arrNumber2.includes(valor) && arrNumber3.includes(valor));

  console.log("Resultado ejercicio 4", interseccion);

  //Ejercicio 5
  //Dado un array de ciudades, sacar en un nuevo array las ciudades no capitales con unos nuevos parámetros que sean city y isSpain. El valor de isSpain será un booleano indicando si es una ciudad de España.
  //Ejemplo: {city: "Logroño", isSpain: "true"}

  const arrCities2 = [
    {city: 'Logroño', country: 'Spain', capital: false},
    {city: 'Bordeaux', country: 'France', capital: false},
    {city: 'Madrid', country: 'Spain', capital: true},
    {city: 'Florence', country: 'Italy', capital: true},
    {city: 'Oslo', country: 'Norway', capital: true},
    {city: 'Jaén', country: 'Spain', capital: false}
  ]

  const newNoCap = arrCities2.filter(cap => cap.capital === false);//Filtro todas las ciudad que no son capitales
  const newPropName = newNoCap.map(item => ({city: item.city , isSpain : item.country === "Spain"}));//Modifico sus propiedades

  console.log("Resultado ejercicio 5", newPropName);

//Ejercicio 6
//Crea una función que redondee un número float a un número específico de decimales.
//La función debe tener dos parámetros: 

//El primer parámetro es un número float con x decimales
//El segundo parámetro es un int que indique el número de decimales al que redondear
//Evitar usar el método toFixed()

function redondearDec(num, decimales){
  
  let cadena = num.toString();//Convierto el num a string
  const arrCad = cadena.split("");//Lo convierto en un array por caracter
  let posicionDecimal = arrCad.indexOf(".");//Busco la posición del punto que delimita los decimales
 
  const result = arrCad.slice(0, posicionDecimal + (decimales + 1));//Copio en un  nuevo array desde la posición cero hasta dos decimales después del punto

  let resultadoFinal = parseFloat(result.join(""));//convierto de nuevo el array a string y a su vez a float
  resultadoFinal = Math.floor(resultadoFinal).toFixed(2); //si uso este método me deja a cero los decimales
  return resultadoFinal;
}

console.log("Resultado ejercicio 6", redondearDec(54.737156,2));

//Ejercicio 7
//Crea una función que retorne los campos de un objeto que equivalgan a un valor “falsy” después de ser ejecutados por una función específica.
//La función debe tener dos parámetros:
//Primer parámetro es un objeto con x número de campos y valores
//Segundo parametro es una funcion que retorne un booleano, que se tiene que aplicar al objeto del primer parámetro

function returnFalsyValues(obj, func){
  
  const falsyObj = {};//Creo un objeto vacío

  for (let checkProp in obj){ //Recorro el objeto
    if(func(obj[checkProp]) === false){ //Se evalua con la función si cada propiedad es un string
      falsyObj[checkProp] = obj[checkProp]; //Se introducen los valores falsy dentro del nuevo objeto
    }
  }

  return falsyObj;//Se retorna el nuevo objeto
}

console.log("Resultado ejercicio 7", returnFalsyValues({ a: 1, b: '2', c: 3}, x => typeof x === 'string'));

//Ejercicio 8
//Crea una función que convierta un número de bytes en un formato con valores legibles ('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB')

//La función debe tener 2 parámetros:
//Primer parámetro debe ser el número de bytes
//Segundo parámetro debe ser un número especificando la cantidad de dígitos a los que se debe truncar el resultado (esto se puede hacer con Number.prototype.toPrecision()). Por defecto, este parámetro debe de tener un valor de 3.

function formatBytes(bytes, trunc){
  const values = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let result = 0;
  
  if(bytes >= 1000000000000000000000000){//No me funciona simplificar en número con 10^24
    if(trunc !== undefined){//Si el trunc tiene valor se le aplica
      result = bytes/1000000000000000000000000;
      result = result.toFixed(trunc);
      return result + values[8];
    } else {
      result = Math.trunc(bytes/1000000000000000000000000);
      return result + values[8];
    }

  } else if(bytes >= 1000000000000000000000){
    if(trunc !== undefined){
      result = bytes/1000000000000000000000;
      result = result.toFixed(trunc);
      return result + values[7];
    } else {
      result = Math.trunc(bytes/1000000000000000000000);
      return result + values[7];
    }

  } else if(bytes >= 1000000000000000000){
    if(trunc !== undefined){
      result = bytes/1000000000000000000;
      result = result.toFixed(trunc);
      return result + values[6];
    } else {
      result = Math.trunc(bytes/1000000000000000000);
      return result + values[6];
    }

  } else if(bytes >= 1000000000000000){
    if(trunc !== undefined){
      result = bytes/1000000000000000;
      result = result.toFixed(trunc);
      return result + values[5];
    } else {
      result = Math.trunc(bytes/1000000000000000);
      return result + values[5];
    }

  } else if(bytes >= 1000000000000){
    if(trunc !== undefined){
      result = bytes/1000000000000;
      result = result.toFixed(trunc);
      return result + values[4];
    } else {
      result = Math.trunc(bytes/1000000000000);
      return result + values[4];
    }

  } else if(bytes >= 1000000000){
    if(trunc !== undefined){
      result = bytes/1000000000;
      result = result.toFixed(trunc);
      return result + values[3];
    } else {
      result = Math.trunc(bytes/1000000000);
      return result + values[3];
    }

  } else if(bytes >= 1000000){
    if(trunc !== undefined){
      result = bytes/1000000;
      result = result.toFixed(trunc);
      return result + values[2];
    } else {
      result = Math.trunc(bytes/1000000);
      return result + values[2];
    }

  } else if(bytes >= 1000){
    if(trunc !== undefined){
      result = bytes/1000;
      result = result.toFixed(trunc);
      return result + values[1];
    } else {
      result = Math.trunc(bytes/1000);
      return result + values[1];
    }
}
}

console.log("Resultado ejercicio 8", formatBytes(123000, 2));


//Ejercicio 9
//Crea una función que a partir de un objeto de entrada, retorne un objeto asegurándose que las claves del objeto estén en lowercase.
//La función debe tener un objeto como único parámetro.


function lowerKeys(obj){

  const resultLowerCase = {};//Declaro un objeto vacío

  for (let propiedad in obj){//Recorro el objeto pasado por parámetro
    propLower = propiedad.toLowerCase();//Convierto a minúsculas las propiedades
    resultLowerCase[propLower] = obj[propiedad];//Asigno al nuevo objeto las propiedades en minúsculas y loas valores ya dados originalmente
  }

  return resultLowerCase;
}

console.log("Resultado ejercicio 9", lowerKeys( { NamE: 'Charles', ADDress: 'Home Street'}));


//Ejercicio 10
//Crea una función que elimine las etiquetas html o xml de un string.
//La función debe tener un string como único parámetro.

function removeHTMLTags(str){

  let regEx = /<[^>]+>/g;//Creo un expresión regular que seleccione los símbolos mayor y menor que y su contenido

  str = str.replace(regEx, "");//Sustituyo en el string de entrada la regEx por una cadena vacía 

  return str;
}

console.log("Resultado ejercicio 10", removeHTMLTags('<div><span>lorem</span> <strong>ipsum</strong></div>'));


//Ejercicio 11
//Crea una función que tome un array como parametro y lo divida en arrays nuevos con tantos elementos como sean especificados.

//La función debe tener dos parámetros:
//El primer parámetro es el array entero que se quiere dividir.
//El segundo parámetro es el número de elementos que deben tener los arrays en los que se divida el array original del primer parámetro.

function splitArrayIntoChunks(array, divisor) {
  const partes = [];//Creo un nuevo array vacío
  for (let i = 0; i < array.length; i += divisor) {
    partes.push(array.slice(i, i + divisor));//se introduce una copia del array desde la posición inicial hasta multiplos del divisor
  }
  return partes;
}

console.log("Resultado ejercicio 11", splitArrayIntoChunks([1, 2, 3, 4, 5, 6, 7], 3));