function rotateArrayToRight(array: number[], k: number): number[] {
//check if array is empty
    if (array.length === 0) return [];


    //looping in the number of steps given
    for (let i = 0; i < k; i++) {
       
        //pick the immediate element at the start of the array and push it to the back (i.e to the right) base on the instruction to rotate to the right
let shift: any = array.shift();
      array.push(shift);
   }
   return array;
}

console.log(rotateArrayToRight([1, 2, 3], 2));
