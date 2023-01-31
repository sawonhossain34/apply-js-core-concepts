// even number true false
function isEvenNumber(number){
    const remainder = number % 2;
    if(remainder === 0){
        console.log('is even number');
    }
    else{
        console.log('is odd number');
    }
    return remainder;
    // console.log(remainder);
}
const evenNumber = isEvenNumber(121);
console.log(evenNumber);

const oddNumber = isEvenNumber(120);
console.log(oddNumber);