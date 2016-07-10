const myCountry = process.argv[2]; 
const value = process.argv[3];

function MoneyStack(possibleBillSizes, billSizeIndex) {
  const myBillSizeIndex = billSizeIndex || 0;
  const myBillSize = possibleBillSizes[myBillSizeIndex];
  
  function passResponsibility(amountRequested) {
   const nextBillSizeIndex = myBillSizeIndex + 1;
   const nextResponsible = new MoneyStack(possibleBillSizes, nextBillSizeIndex);

   if (possibleBillSizes.length - 1 >= nextBillSizeIndex) { 
     nextResponsible.withdraw(amountRequested);
   }
  }
  

  this.withdraw = function (amountRequested) {
    const numOfBills = Math.floor(amountRequested / myBillSize);
    const amountRequestedLeft = amountRequested - (myBillSize * numOfBills)
     
    if (numOfBills > 0) {
      console.log(numOfBills + ' bills of size ' + myBillSize + ' have been withdrawn');     
    }

    passResponsibility(amountRequestedLeft);
  }
}


function billSizesFactory(country) {
  supportedCountries = ['Bulgaria', 'USA'];
  if (supportedCountries.indexOf(country) === -1) {
    var errMsg = 'Country not supported ' + country; 
    throw new Error(errMsg);
  }

  const countriesBillSizes = {
     USA: [100, 50, 20, 10, 5, 2, 1],
     Bulgaria: [100, 50, 20, 10]
  };

  return countriesBillSizes[country];  
}


try {
const moneyStack = new MoneyStack(billSizesFactory(myCountry));
 moneyStack.withdraw(value)
} catch (e) {
 console.log(e.message);
}
