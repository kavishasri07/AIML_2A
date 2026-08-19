console.log("===== Variable =====");
var fname= "Kavisha";
var sname= "Srivastava";
console.log(fname + " " + sname);
var a= 40;
var b= 20;
if (a>b) {
    console.log("A is greater, value of A= ", a);
} else {
    console.log("B is greater, value of B= ", b);
}

console.log("===== Function =====");
function greet(s1, s2) {
    console.log("Hello", s1, s2);
}
greet("Hello", "World");
greet("Good", "Morning");

function add(x, y) {
    return x+y;
}
var result= add(5, 10);
console.log("Sum is: ", result);
console.log("===== Default Arguments =====");
function greet1(s1= "Hello", s2= "World") {
    return s1+" "+s2;
}
console.log(greet1());
console.log(greet1("Good", "Morning"));
console.log("===== Percentage =====");
function totalmarks(maths, english, science) {
    return maths+english+science;
}
function percentage(total) {
    return (total/300)*100;
}
var total= totalmarks(80, 75, 90);
console.log("Total marks: ", total);
console.log("Percentage: ", percentage(total));
