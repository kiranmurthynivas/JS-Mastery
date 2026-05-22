function countOccurances(str,val) {
   let count = 0;
   let pos = str.indexOf(val);

   while( pos !== -1) {
      count++;
      pos = str.indexOf(val, pos+1);
   }

   return count;
}

let str =  "He's my king from this day until his last day";

console.log(countOccurances(str,"i"));