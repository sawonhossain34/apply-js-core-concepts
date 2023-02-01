// sum of numbers
function sumOfNumbers(number){
    let result = 1 ;
    for(i=1; i<number;i++){
        result=result *number;
    }
    return result;
}

const result = sumOfNumbers(9);
console.log(result);