/* 
 * Tight augmentation example:
 * The augmenting module receives as an argument the module to be augmented.
 * Note: because the augmenting module is depending no a previously defined method
 * in the augmented module, this is called "tight" augmentation.
 * However, it gives us form of method "overriding".
 */

// module to e augmented
var MODULE = require('./module-node.js')


// augmenting module
var MODULE = (function (my){
  my.myNewAugmentedMethod = () => console.log('module augmented method')

  // method overriding:
  var myMethodOld = my.myMethod;

  my.myMethod = () => { console.log('module method overriden'); myMethodOld() }

  return my
})(MODULE)

module.exports = MODULE
