const myFunc = function(num1, num2){
    let sum1 = num1 + num2;
    var sum2 = 0;
     for(var i = sum1; i > 0; i--)
     {
        if(i % 3 !== 0 && i % 4 !== 0)
        {
         sum2 += i;
         
        }
        
        
    }
    return sum2;
    
};

const num1 = Number(prompt("Please enter 1st starting number 1-10: "));
const num2 = Number(prompt("Please enter 2nd starting number 1-10: "));
if(!isNaN(num1) || !isNaN(num2))
{
   console.log(`Data entry error! You must enter positive integers with the starting number less than the ending number.\nYou entered \"${num1}\" and \"${num2}\". Click refresh to restart.`);
    
        
}
if(num1 > 0 && num2 > 0)
{

        if(num1 > num2){
        console.log(`Data entry error! You must enter positive integers with the starting number less than the ending number.\nYou entered \"${num1}\" and \"${num2}\". Click refresh to restart.`);
        
        }
        else{
       var ans = myFunc(num1,num2);
       console.log(`The sum of the numbers not divisible by 3 or 4\n starting at \"${num1}\" and ending with \"${num2}\" is ${ans}`);

        }
}





