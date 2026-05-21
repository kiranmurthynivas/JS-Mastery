function isPrime(n) {
   if(n <=1)  {
      return false;
   }

   if( n == 2 || n == 3) {
      return false;
   }

   for(let i=2; i * i < n; i++) {
      if( n % i == 0) {
         return false;
      }
   }

   return true;
}

console.log(isPrime(4));