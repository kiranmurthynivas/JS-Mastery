const DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function base62Encoding(DICTIONARY, num) {

   const base = DICTIONARY.length;
   let encoded = "";
   
   while(num > 0) {
      let remainder = num % base;

      encoded = encoded + DICTIONARY[remainder];

      num = Math.floor(num / base);
   }

   return encoded.split("").reverse().join("");
}

console.log(base62Encoding(DICTIONARY, 125));