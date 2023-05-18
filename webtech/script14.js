//prime number by taking input user
let num1=3;
let count=0;
for(let i=1;i<=num1;i++){
    if(num1%i==0){
        count++;
    }
}
if(count==2){
    console.log('${num1} is prime number');
}
else{
    console.log("${num1} is not prime number");
}

