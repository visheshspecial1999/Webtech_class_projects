console.log("start");
function outerouter() {
    let a=10;
    console.log(a);
    function outer(){
        console.log(a);
        function inner(){
            console.log(a);
        }
        return inner;
    }
    return outer;                     
}
outerouter()()();