let c= {
    age: 20,
    job: "Teacher",
    details: function() {
        console.log("My age is: ", this.age);
        console.log("My job is: ", this,job);
    },
    profile: "Assistant Teacher",
};
const a= {
    name: "Rahul",
    salary: 15000,
    incsal: function() {
        incsal= this.salary+5000
    }
};
let d= {
    marks: 75,
    grade: "A",
    modify: function() {
        this.marks= this.marks+5;
        this.grade= this.grade+"+";
    },
    show: function() {
        console.log("My marks are: ", this.marks);
        console.log("My grade is: ", this.grade);
    }
};