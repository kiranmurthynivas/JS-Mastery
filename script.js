function twoSum(arr , target) {

  const map = new Map();

  for(let i =0; i<arr.length; i++) {
   let current =  arr[i];
    let needed = target - arr[i];

    if(map.has(needed)) {
      return [map.get(needed) , i];
    } else {
      map.set(current, i);
    }
  }
  return -1;
}

let arr = [2,6,7,3,9,1];

console.log(twoSum(arr,10));