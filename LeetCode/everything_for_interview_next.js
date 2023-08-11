var a = 2;
function outer(){
    var b = 4;
    function inner(){
        var c = 6;
        console.log(a+b+c);
    }
    inner()
}
outer()


const xx = {foo: 0};
const y = {foo:0};
console.log(xx == y)
console.log(xx === y)

let x = 1;
function increment(){
    x++;
    setTimeout(()=>console.log(x),0);
}
increment();
console.log(x)
console.log("2"*"4"+5);