function modularExponentiation(base, expo, modulo) {
   if (modulo === 1) {
      return 0;
   }

   let result = 1;
   base = base % modulo;

   while( expo > 0) {

      if( expo % 2 !== 0) {
         result = (result * base) % modulo; 
      }

      base = ( base *  base ) % modulo;
      expo = Math.floor( expo / 2);
   }

   return result;

   
}

console.log(modularExponentiation(2, 3, 5));