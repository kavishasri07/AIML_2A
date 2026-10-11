const fs= require('fs')
fs.writeFile("std.txt", "Name: Hello", (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log("File created")
    }
})

fs.appendFile("std.txt", "Name: Hello", (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log("File updated")
    }
})

fs.readFile("std.txt", "utf8", (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log("File read")
    }
})

fs.unlink("std.txt", (err)=> {
    if (err) {
        console.log(err)
    } else {
        console.log("File deleted")
    }
})