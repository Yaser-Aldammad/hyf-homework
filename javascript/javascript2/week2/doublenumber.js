let numbers = [1, 2, 3, 4];
 let newNumbers =[]

   let filtering = numbers.filter(
     item=>item % 2 !== 0

)
newNumbers = filtering.map((newitem) => newitem * 2);
    newNumbers = numbers
      .filter((item) => item % 2 !== 0)
      .map((item) => item * 2);

console.log("The doubled numbers are", newNumbers);
//console.log(newNumbers); // [2, 6]