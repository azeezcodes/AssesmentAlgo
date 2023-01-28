

const monotonic = (array: number[]) => {
   let isIncreasing: boolean = true;
   let isDecreasing: boolean = true;

   for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
         isIncreasing = false;
      }
      if (array[i] < array[i + 1]) {
         isDecreasing = false;
      }
   }

   return isIncreasing || isDecreasing;
}

console.log(monotonic([5]));
