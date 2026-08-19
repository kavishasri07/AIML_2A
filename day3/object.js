const users= [
    { id:1, name:"A", }, 
    { id: 2, name: "B" }
];
console.log(users)
const employees= {
    id: 101, 
    name: "A",
    display: function() {
        console.log("ID: ", this.id);
        console.log("Name: ", this.name);
    }
};
employees.course= "B.Tech";
console.log(employees);
delete employees.name;