function modularExponentiation(base, expo, modulo) {
   if (modulo === 1) {
      return 0;
   }

   let value = 1;

   for (let i = 0; i < expo; i++) {
      value = (value * base) % modulo;
   }

   return value;
}

console.log(modularExponentiation(2, 3, 5));