// print prime numbers between a and b;

var count=0;
var num=prompt("enter any number to check");
num=Number.parseInt(num);
for(var i=1;i<=num;i++)
{
    if(num%i==0)
    {count++}
}
if(count==2)
{
    console.log("prime number")
}
else{
    console.log("not prime number")
}
