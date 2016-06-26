Chain Of Responsibility and Factory

A gradual introduction to the chain of responsibility pattern.

Code examples provide gradual introduction to chain of responsibility and simple factory patterns. The example used is with an virtual ATM machine that has the feature of spitting out unlimited amount of money with money stacks of different bills. e.g. When the user requests the amount of 233 it is logical that the ATM should spit out a stack of 2x100, 3x10, 1x2 and 1x1 bills.

The first example simple-withdrawal.js 
We start off with a simplistic constructor function and an instance. The constructor can take an array of possible bill sizes (100, 50, 20, 10, 5, 2, 1) and then the instance can spit out a stack with the bills of the first size of possible sizes (i.e. 100). After everyone runs, reads and understands the code, the idea of "handling the responsibility" for the other possible bill sizes will be discussed.

In the second example pattern-cor.js
The chain of responsibility pattern is introduced in the form of the function 'passResponsibility'. It is very simple example, where the responsibility is always passed to the same type of object (MoneyStack), with the same possible bill sizes - only the bill size index being moved forward. 

A more complex example would be a chain of responsibility where different types of objects handle the sequence of actions - e.g. The chain of responsibilty for reading a file might include one type of instance to extract an archive on the file system, another type of instance to parse the file contents, third instance to format the output and render or print out the contents.


The third example pattern-cor-factory.js
We will finish the subject with complementing the COR pattern with a factory function for initializing the ATM with different type of bill sizes (i.e. the ATM might not spit out bills smaller than 10, as it is the case in Bulgaria). We will also discuss how we can further use the factory pattern in the more complex file reading example in order to extract different types of archives, read out different types of files and print out different formattings of the file content.


