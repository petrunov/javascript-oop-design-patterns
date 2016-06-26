const configModule = (function () {
  var _config = {
    lang: 'en',
    useCache: false
  }

  var myPrivateMethod = function () { console.log('set default config for example') }

  

  return {
    setConfig: (newConfig) => {
      _config = newConfig
    },
    getConfig: () => _config,
    somePublicMethod: () => myPrivateMethod(),
    anotherPublicMethod: function() { this.somePublicMethod() } // relies on another public method
  }
})()


console.log(configModule.getConfig())

configModule.setConfig({lang: 'bg', useCache: true})

console.log(configModule.getConfig())
configModule.anotherPublicMethod();
