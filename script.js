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

console.log(isUgly(6));   // true
console.log(isUgly(14));  // false
console.log(isUgly(25));  // true