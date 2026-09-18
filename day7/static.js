class Hello {
    static name= "Example of static variable and method";
    static show() {
        console.log("Hello class "+Hello.name);
    }
}
Hello.show();

class Hello2 {
    static name= "Example of static method without static variable";
    static show() {
        console.log("Hello class "+Hello2.name);
    }
}
Hello2.show();

class Hello3 {
    static name = "Example of static method with static variable";
    constructor() {
        this.instanceVar = "Instance Variable";
    }
    show() {
        console.log("Static variable: " + Hello3.name);
        console.log("Instance variable: " + this.instanceVar);
    }
}
let h3 = new Hello3();
h3.show();

class Hello4 {
    static name = "Example of static method with static variable";
    instanceVar = "Instance Variable";
    show() {
        console.log("Static variable: " + Hello4.name);
        console.log("Instance variable: " + this.instanceVar);
    }
}
let h4 = new Hello4();
h4.show();

class student {
    static name = "Hello";
    static lastname = "World";
    show() {
        console.log(`Firstname: ${student.name}`);
        console.log(`Lastname: ${student.lastname}`);
    }
}
let s = new student();
s.show();