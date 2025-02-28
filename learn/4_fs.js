 //files

 const fs = require('fs')

 // reading files

 //let fileContent =  fs.readFileSync('f1.txt')
 //console.log('data of file 1 ->  '+ fileContent)

 //writing files

 //fs.writeFileSync('f2.txt', 'hi this was added to the file')
 //console.log('File has been written')

 //append files

 //fs.appendFileSync('f3.txt', ' This was updated')
 //console.log('File has beeen appended')

 //delete files

 //fs.unlinkSync('f2.txt')
 //console.log('File has been deleted')

 
 //directories

 // creating directories

 //fs.mkdirSync('myDirectory')

// check the content inside the directory

let folderPath = 'D:\\test\\myDirectory'

let folderContent = fs.readdirSync(folderPath)
console.log("Folder Content: " + folderContent)
console.log("Folder Content: " , folderContent)

// check a directory exists or not 

let doesExist = fs.existsSync('myDirectory')
console.log(doesExist)


// remove directory

fs.rmdirSync('myDirectory')
console.log('File has been removed')

