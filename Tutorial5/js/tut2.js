function sumMethod1(num1,mun2){
    return num1 + num2;
}

const sum1 = summethod1(3,4);
console.log(`Method 1 sum is: ${sum1}`)

//method 2
const sumMethod2 = function(num1,num2){
    console.log(num1+num2);
}

console.log (`Thesum using method 2 is: ${sumMethod2(5,6)}`)
//method 3

const sumMethod3 = (num1, num2) => {
    console.log(num1+num2);
    
}
sumMethod3(2,7);