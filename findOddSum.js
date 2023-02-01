// function getSumOfAnArray(numbers){
//     var sum = 0;
// for(i = 0 ; i < numbers.length ; i++){
// const index = i;
// const element = numbers[index];
// sum = element + sum;
// console.log(index, element, sum);
// }
// return sum;
// }



//! find odd number
function oddNumberSum(numbers){
    var odd = [];
for(i = 0 ; i < numbers.length ; i++){
const index = i;
const element = numbers[index];
// ===  !==
if(element % 2 !== 0){
console.log(index, element);
odd.push(element);
}
}
return odd;
}

const array1 =[12, 25, 45, 56, 36, 78];
const final = oddNumberSum(array1);
console.log(final);
// const array =[12, 25, 45, 56, 36, 78];
// const final = getSumOfAnArray(array);

