// first import
var singleInstance = singleInstance || { firstName: 'Greg' }

// second import
var singleInstance = singleInstance || { firstName: 'Some other name' }

console.log(singleInstance);
