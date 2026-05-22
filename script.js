const DICTIONARY = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

function base62Decoding(id) {

   const base = DICTIONARY.length;
   let decoded = 0;

   for(let i=0; i < id.length; i++) {
      decoded = decoded * base + DICTIONARY.indexOf(id.charAt(i));
   }

   return decoded;
   
}

console.log(base62Decoding("cb"));