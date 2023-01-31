function isLeapYear(number){
    const remainder = number % 4;
    if(remainder === 0){
        return true;
    }
    
    return false;
    
    // console.log(remainder);
}
const evenNumber = isLeapYear(1921);
console.log(evenNumber);

const oddNumber = isLeapYear(2018);
console.log(oddNumber);