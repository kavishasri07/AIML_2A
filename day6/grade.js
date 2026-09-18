let student= {
    name: "Ravi",
    age: 15,
    grade: "A",
    updategrade:function() {
        this.grade= "A+";
    }
}
student.updategrade();
console.log("Name: ", student.name);
console.log("Age: ", student.age);
console.log("Grade: ", student.grade);