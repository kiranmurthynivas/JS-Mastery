function isUgly(num) {
   if (num <= 0) return false;

   num = maxDivide(num, 2);
   num = maxDivide(num, 3);
   num = maxDivide(num, 5);

   return num === 1;
}

function maxDivide(num, divisor) {
   while (num % divisor === 0) {
      num = num / divisor;
   }

   return num;
}



function firstNuglyNumbers(n) {
    let counter = 0;
    let arr = [];
    let currentNumber = 1; 

    while( counter <n ) {
      if(isUgly(currentNumber)) {
         arr.push(currentNumber);
         counter ++;
      }
      currentNumber++;
    } 

    return arr;
}

console.log(firstNuglyNumbers(10));