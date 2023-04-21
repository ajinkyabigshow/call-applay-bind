//advance javascript
console.log("ajinkya");
var a = 12
function demo() {
    console.log("this is demo");
}
demo()

console.log(b);
var b = 13
console.log(b);


var x = function y() {
    console.log("this is y");
}
console.log(x);

function demo1() {
    var b = 10
    demo()
    function demo() {
        var c = 5
        console.log(a + b + c);
    }
}
demo1()