// even number true false
function isEvenNumber(number){
    const remainder = number % 2;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
    // console.log(remainder);
}
const evenNumber = isEvenNumber(121);
console.log(evenNumber);

const oddNumber = isEvenNumber(120);
console.log(oddNumber);