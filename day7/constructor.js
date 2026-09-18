class secA {
    constructor(name, rollno, marks) {
        this.name= name;
        this.rollno= rollno;
        this.marks= marks;
    }

    display() {
        console.log("Name:", this.name);
        console.log("Roll No:", this.rollno);
        console.log("Age:", this.marks);
    }
}

let s1= new secA("Hello1", 101, 19);
let s2= new secA("Hello2", 102, 18);
let s3= new secA("Hello3", 103, 20);
let s4= new secA("Hello4", 104, 20);
let s5= new secA("Hello5", 105, 19);
let s6= new secA("Hello6", 106, 18);
let s7= new secA("Hello7", 107, 18);
let s8= new secA("Hello8", 108, 19);
let s9= new secA("Hello9", 109, 20);

s1.display();
s2.display();
s3.display();
s4.display();
s5.display();
s6.display();
s7.display();
s8.display();
s9.display();