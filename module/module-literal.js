const configModule = {

 // default config - can be changed, extended
 config: {
   lang: 'en',
   useCache: false,
 },

 getConfig: function() { 
   return this.config 
 },
 setConfig: function(newConfig) {
   if (typeof newConfig === 'object') {
     this.config = newConfig;
   }
 }
}

console.log(configModule.getConfig())

configModule.setConfig({lang:'bg', useCache: true})

console.log(configModule.getConfig())


