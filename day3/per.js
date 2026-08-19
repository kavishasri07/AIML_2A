console.log("Percentage:");
function marks(a, b, c) {
    return a+b+c;
}
function per(total) {
    return (total/300)*100;
}
var total= marks(80, 56, 79);
console.log("Total marks: ", total);
console.log("Percentage: ", per(total)+"%");