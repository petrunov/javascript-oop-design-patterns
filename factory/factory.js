var buttons = {
  normal: {type: 'normal'},
  fancy: {type: 'fancy'}
}

// var inputs = {
//   text: {type: 'text'},
//   textarea: {type: 'textarea'}
// }



function buttonFactory (type) {
  if (!buttons[type]) throw new Error(type + ' doesn\'t exist.')

  return Object.create(buttons[type], { instantiated: {value: true}})
  
  // switch (element) {
  //   case 'button':
  //     ...
  //     break
  //   case 'input':
  //     ...
  //     break
  // }

  // name is wrong

  // do one thing, do it well
}

var fancyButton = buttonFactory('fancy')
var normalButton = buttonFactory('normal')
console.log(fancyButton.type)
console.log(normalButton.type)