
const myFunc = function(num1, num2){ 
    
     for(var i = num1; i <= num2; i++)
     {
        var array1 = [];
        var sum = 0;
        let perfectSqr = Math.sqrt(i*i);
        if(i*i === perfectSqr)
        {
        
         sum += i;
         console.log(sum);
         array1.push(i + ", ");
            
        }

    }

   var text = array1.toString();
   
    var obj ={
        sum1: sum,
        arry: text

    };
    console.log(obj);
    return obj;
    
};

const num1 = String(prompt("Please enter start number: "));
const num2 = String(prompt("Please enter end number: "));
if(isNaN(num1) || isNaN(num2))
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
       console.log(`Results for start number = \"${num1}\" and end number = \"${num2} `)
       console.log(`The perfect squares are: ${ans.sum1}`);
       console.log(`The sum of the perfect square is: ${ans.arry}`);
       

        }
}
