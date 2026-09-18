class Student {
    static count = 0;
    constructor(rollNo, name, marks) {
        this.rollNo = rollNo;
        this.name = name;
        this.marks = marks;
        Student.count++;
    }
    display() {
        console.log("Roll No:", this.rollNo);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);

        if (this.marks >= 40) {
            console.log("Result: Pass");
        } else {
            console.log("Result: Fail");
        }
    }
    static total() {
        console.log("Total Students:", Student.count);
    }
}

let s1 = new Student(1, "Hello1", 85);
let s2 = new Student(2, "Hello2", 75);
let s3 = new Student(3, "Hello3", 30);
s1.display();
s2.display();
s3.display();
Student.total();