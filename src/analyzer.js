const analyzer = {  
  getWordCount: (text) => { 
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.  
    if (text.trim() === '') {
      return 0;
    }
    const words = text.trim().split(/\s+/).length;
    return words; 
      
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    if (text.trim() === '') {
      return 0;
    }
    const characters = text.trim().length;
    return characters;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const charactersEx = text.replace(/[\s.,#!$¡%&;:{}=\-+_`~()¿?']/g, '').length;
    return charactersEx;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
       
    const words = text.trim().split(/\s+/).length;
    const totalCharacters = text.replace(/\s+/g, '').length;

    const averageWordLength = (totalCharacters / words).toFixed(2);
    return Number(averageWordLength);
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const numbersFound = text.match(/\b\d+(?:[.,]\d+)?\b/g); 
    /* la expresion match corresponde a lo siguiente, se abre y se cierra con /, 
    \d+ Representa uno o más dígitos enteros
    (?:[.,]\d+)?: Esta parte es un grupo no capturador. (?: ... ) define un grupo que no se almacenará en una variable. 
    [.,] es una clase de caracteres que coincide con un punto o una coma. 
    \d+ representa uno o más dígitos enteros. La parte ? al final del grupo hace que el grupo completo sea opcional, 
    es decir, puede haber o no un punto o coma seguido de dígitos enteros, lo que permite que coincida con números enteros o decimales.
    \b: Otro límite de palabra, para asegurarse de que el número completo (entero o decimal) esté delimitado correctamente en el texto.
    g: Bandera global para encontrar todas las coincidencias posibles.*/
    if (!numbersFound) {
      return 0;
    }
    let numberCount = 0;
  
    for (let i = 0; i < numbersFound.length; i++) {
      numberCount++;
    }
    return numberCount;
    
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const numbersFound = text.match(/\b\d+(?:[.,]\d+)?\b/g);
    if (!numbersFound) {
      return 0;
    }
   
    let numberSum = 0;
    for (let i = 0; i < numbersFound.length; i++) {
      numberSum += parseFloat(numbersFound[i]); // usamos el parseFloat para convertir cada número a su valor numérico
    }
    return numberSum;
  } 

};


export default analyzer;
