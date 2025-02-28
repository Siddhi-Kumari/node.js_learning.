// child process is a node module used to create sub process within a script
// you can perform diffrent task with your script by just using some methods

const cp = require('child_process')

// cp.execSync('calc')
//
// cp.execSync('start chrome https://www.scaler.com/academy/mentee-dashboard/todos')

console.log('output ' + cp.execSync('node demo.js'))
