function calculator(task,a,b){
    return task(a,b)
}
let sum=(a,b)=>a+b;
let sub=(a,b)=>a-b;
let mul=(a,b)=>a*b;
let div=(a,b)=>a/b;
// calculator(sum,a,b);
let a=+prompt("Enter first digit");
let b=+prompt("Enter second digit");
let op=prompt("Enter the operation name");
switch(op){
    case "sum":
        console.log(calculator(sum,a,b));     
    break; 
case "sub":
    console.log(calculator(sub,a,b));
    break;

    case "mul":
    console.log(calculator(mul,a,b));
    break;

    case "div":
    console.log(calculator(div,a,b));
    break;

    default:
        console.log("wrong choice !!!!!!!!!!!!!!!!!!!");
    }   