function getSumOfAnArray(numbers){
    var sum = 0;
for(i = 0 ; i < numbers.length ; i++){
const index = i;

const element = numbers[index];
sum = element + sum;

console.log(index, element, sum);
}
return sum;
}

const array =[12, 25, 45, 56, 36, 78];
const final = getSumOfAnArray(array);

