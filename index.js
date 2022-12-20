
//Dado un array de números imprimir por consola el número mayor

let numberList2 = [1,2,3,4,5,6,7,8,9,27]
let maxNumber = numberList2[0]
for (let i= 0 ; i < numberList2.length; i++) {

  if (numberList2[i] > maxNumber){
    maxNumber = numberList2[i]
  }
}

//Dado un array de números imprime por consola la suma de todos los que sean pares.

let numbersList = [4, 8, 7, 5, 20, 3,];

let sumaPares = 0;

for (const number of numbersList) {
  if(number % 2 == 0){
  sumaPares = sumaPares + number
  }
}

// Ddao un array de numerso y strings imprime un array de solamente los strings.

// let soloString = []

// for  (let i = 0; i < array.length; i++) {
  //   if (typeof array[i] == "string") {
    //     soloString.push(array[i])
    //   }
    // }

    // console.log(`los string son: ${soloString}`)



// Ddao un array de numerso y strings imprime un array de solamente los strings.
let array = [4, 'casa', 8, 'perro', 'amiga', 'como', 'yes', 'beach']
function toOnlyStringArray (array) {
  let soloString = [];
  for (let item of array){
    if (typeof item == "string") {
      soloString.push (item)
    }
  }
  return soloString
}
// let result = (toOnlyStringArray(array))
// console.log(result)

//Dado un array de strings imprime un array de solamente los strings que empiezan por ‘a’.
// hacer funcion

let manyAnimals = [ "raton", 'aguila', 'perro', 'araña', 'leon', 'alpaca']

function selectOnlyStringWithA(stringList) {
  let startWithA = []
  stringList.forEach(element => {
    if (element[0] == "a"){
      startWithA.push(element);
    }
  });
  return startWithA;
}

console.log(selectOnlyStringWithA(manyAnimals));