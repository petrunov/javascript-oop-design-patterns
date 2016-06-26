const value = process.argv[2];

function MoneyStack(possibleBillSizes, billSizeIndex) {
  const myBillSizeIndex = billSizeIndex || 0;
  const myBillSize = possibleBillSizes[myBillSizeIndex];
  

  function passResponsibility(amountRequested) {
   const nextBillSizeIndex = myBillSizeIndex + 1;

   if (nextBillSizeIndex in possibleBillSizes) { 
     const nextResponsible = new MoneyStack(possibleBillSizes, nextBillSizeIndex);
     nextResponsible.withdraw(amountRequested);
   }
  }
  

  this.withdraw = function (amountRequested) {
    const numOfBills = Math.floor(amountRequested / myBillSize);
    const amountRequestedLeft = amountRequested - (myBillSize * numOfBills)
     
    if (numOfBills > 0) {
      console.log(numOfBills + ' bills of size ' + myBillSize + ' have been withdrawn');     
    }
   

    if (amountRequestedLeft) {
      passResponsibility(amountRequestedLeft);
    }
  }
}


const moneyStack = new MoneyStack([100, 50, 20, 10]);
moneyStack.withdraw(value);
