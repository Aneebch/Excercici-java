
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

