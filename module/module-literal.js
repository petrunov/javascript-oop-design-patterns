/* 
 * This approach has several drawbacks - the most obvious being that there is no way to have 
 * "private" properties and methods in the module.
 */


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


