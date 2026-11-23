const express= require('express');
const app= express();

app.use(express.json());

//sample student data
let students= [
    {id: 1, name: 'A'},
    {id: 2, name: 'B'}
];

//get- display all students
app.get('/students', (req, res) => {
    res.json(students);
});

//post- add a new student
app.post('/students', (req, res) => {
    const student= req.body;
    students.push(student);
    res.send("Student added successfully");
});

//put- update student details
app.put('/students/:id', (req, res) => {
    const id= parseInt(req.params.id);
    const student= students.find(s => s.id === id);
    if (student) {
        student.name= req.body.name;
        res.send("Student updated successfully.");
    } else {
        res.send("Student not found.");
    }
});

 //delete- delete a student
 app.delete('/students/:id', (req, res) => {
    const id= parseInt(req.params.id);
    students= students.filter(s => s.id!==id);
    res.send("Student deleted successfully.");
});

//start server
app.listen(4004, () => {
    console.log("Server running on port 4004");
});