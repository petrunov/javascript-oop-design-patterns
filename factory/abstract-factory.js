var buttons = {
  normal: {type: 'normal'},
  fancy: {type: 'fancy'}
}

var inputs = {
  text: {type: 'text'},
  textarea: {type: 'textarea'}
}



function buttonFactory (type) {
  if (!buttons[type]) throw new Error(type + ' doesn\'t exist.')

  return Object.create(buttons[type], { instantiated: {value: true}})
}


function inputFactory (type) {
  if (!inputs[type]) throw new Error(type + ' doesn\'t exist.')

  return Object.create(inputs[type], { instantiated: {value: true}})
}



// "element" is more abstract notion in regard to "button" and "input", which are more concrete elements
// however in javascript this is better called "factory method" or factory function
function elementFactory(element, type) {
  var factories = {
    buttonFactory: buttonFactory,
    inputFactory: inputFactory,
  }

  return factories[element + 'Factory'](type)
}

var normalButton = elementFactory('button', 'normal')
var fancyButton = elementFactory('button', 'fancy')
var textInput = elementFactory('input', 'text')
var textareaInput = elementFactory('input', 'textarea')

console.log(normalButton.type, fancyButton.type, textInput.type, textareaInput.type)