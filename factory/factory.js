var buttons = {
  normal: {type: 'normal'},
  fancy: {type: 'fancy'}
}

// alternative to button
// var inputs = {
//   text: {type: 'text'},
//   textarea: {type: 'textarea'}
// }



function buttonFactory (type) {
  if (!buttons[type]) throw new Error(type + ' doesn\'t exist.')

  return Object.create(buttons[type], { instantiated: {value: true}})
  
  // What if we use this function to create more types of elements, like 'input'?

  // switch (element) {
  //   case 'button':
  //     ...
  //     break
  //   case 'input':
  //     ...
  //     break
  // }

  // - function name would be wrong!

  // Better for the function to do one thing but to do it well.
  // Check the example for abstract factory instead!
}

var fancyButton = buttonFactory('fancy')
var normalButton = buttonFactory('normal')
console.log(fancyButton.type)
console.log(normalButton.type)