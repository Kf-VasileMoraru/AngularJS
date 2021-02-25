function myDisplayer(some) {
    console.log(some)
}

function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
    return "ion";
}


new Promise((x)=>{
        setTimeout(()=>{
            x(()=>myCalculator(5, 5, myDisplayer))
        }, 2000);})
    .then(x=>{
    console.log(x())});



 function test(){
return  setTimeout(()=>{
        x(myCalculator(5, 5, myDisplayer))
    }, 3000);

}
test()
