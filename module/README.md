Start off with module-literal.js - it is the most simplistic example of structuring code into an object literal that can be reffered to as a "module".

So move on to module-pattern.js - it is a more complex example of creating a literal object "module" that has access to the private scope (via clojure) of an IIF. This is the module pattern in essense.


To get familiar with all module concepts, use the node environment to run the next examples.
Read the contents of module-node.js and module-aug-tight.js then:
1. start node by typing `node` in the console.
2. Require the tight augmentation example`: var MODULE = require('./module-aug-tight.js')
3. Inspect the module by typing: MODULE; MODULE.myMethod(); MODULE.myNewAugmentedMethod()

After the previous example is understood, read here about the concept of loose augmentation:
Loose augmentation being essentially the same as tight, but without depending on the existance of the augmented module - i.e. if the module does not exist, it will be created. However the augmentind module cannot depend on the existance of any methods or properties (e.g. as 'myMethod' in the tight aug. example). Loose augmentation is done with the OR operator: (function (my) {})(MODULE || {})

