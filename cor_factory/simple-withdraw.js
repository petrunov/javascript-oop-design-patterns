const value = process.argv[2];

function MoneyStack(possibleBillSizes, billSizeIndex) {
  const myBillSizeIndex = billSizeIndex || 0;
  const myBillSize = possibleBillSizes[myBillSizeIndex];
  
  this.withdraw = function (amountRequested) {
    const numOfBills = Math.floor(amountRequested / myBillSize);
     
    if (numOfBills > 0) {
      console.log(numOfBills + ' bills of size ' + myBillSize + ' have been withdrawn');     
    }
    
    /* we can put a ton of logic here with some 'if-else' statements to handle the remaining amount
     * for each bill size || we can use the chain of responsibility pattern to pass the responsibility
     * for each bill size to another MoneyStack instance. 

     var amountRequestedLeft = amountRequested - (numOfBills * myBillSize);
     if (amountRequestedLeft) {
       passResponsibility(amountRequestedLeft);
     }

     */
  }

}


const moneyStack = new MoneyStack([100, 50, 20, 10, 5, 2, 1]);
moneyStack.withdraw(value)
