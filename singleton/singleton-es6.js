const singleInstance = { 
  firstName: 'Greg', 
  called: false, 
  init: () => { 
    if (!this.called) {
      console.log('only once')
      this.called = true
    }
  } 
}

// of course singleInstance.called = false; singleInstance.init() is always possible


singleInstance.init()
singleInstance.init()
console.log(singleInstance)


// var singleInstance = 'second import will fail because it is a constant'


