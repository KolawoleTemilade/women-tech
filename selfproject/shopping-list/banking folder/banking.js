// const bankAccount = [];

// const addBankAccount = (name, balance) =>{
//     const account = { name:name, balance: balance};
//     addBankAccount.push(account)
// };

// function bankTransfer(sender, reciever, amount){
//     const senderAccount = bankAccount.find(function (account){
//         if (account.name ===sender){
//             return true;
//         }
//         return false;
//     });

//     const recieverAccount = bankAccount.find((acc) => {

//     })
// }

// function 


const bankAccounts = [];

const addBankAccount = (name, balance, accountNo) => {
  // local variable (local scope) account
  const account = {
    name: name,
    balance: balance,
    accountNumber: accountNo,
  };
  bankAccounts.push(account); // global variable // global scope
};

const findAccountByName = (accountNumber) => {
  const account = bankAccounts.find(function (acc) {
    if (acc.accountNumber === accountNumber) {
      return true;
    }
    return false;
  });

  return account;
};

const findAccountIndex = (accountNumber) => {
  const accountIndex = bankAccounts.findIndex(function (acc) {
    if (acc.accountNumber === accountNumber) {
      return true;
    }
    return false;
  });

  return accountIndex;
};

function bankTransfer(sender, receiver, amount) {
  const senderAccountIndex = findAccountIndex(sender);
  const receiverAccountIndex = findAccountIndex(receiver);
  if (senderAccountIndex == -1) {
    return "Invalid account number for sender";
  }
  if (receiverAccountIndex == -1) {
    return "Invalid account number for Receiver";
  }
  if (bankAccounts[senderAccountIndex].balance < amount) {
    return `${bankAccounts[senderAccountIndex].name} has Insufficient balance`;
  }
  bankAccounts[receiverAccountIndex].balance += amount;
  bankAccounts[senderAccountIndex].balance -= amount;
  return {
    amount: amount,
    description: `${bankAccounts[senderAccountIndex].name} transfered ${amount} to ${bankAccounts[receiverAccountIndex].name}`,
    date: new Date(),
  };
}

function bankTransfer2(sender, receiver, amount) {
  const senderAccount = findAccountByName(sender);
  const receiverAccount = findAccountByName(receiver);
  if (senderAccount == undefined) {
    return "Invalid account number for sender";
  }
  if (receiverAccount == undefined) {
    return "Invalid account number for Receiver";
  }
  if (senderAccount.balance < amount) {
    return `${senderAccount.name} has Insufficient balance`;
  }
  receiverAccount.balance += amount;
  senderAccount.balance -= amount;
  return {
    amount: amount,
    description: `${senderAccount.name} transfered ${amount} to ${receiverAccount.name}`,
    date: new Date(),
  };
}

console.log(bankAccounts.length, "before adding");

    addBankAccount("Luke", 2000, "34567898");
    addBankAccount("Princess", 100000, "09876545");

console.log(bankAccounts.length, "after adding");
console.log(bankAccounts, "DAtABASE");

const status = bankTransfer("34567898", "09876545", 100);
console.log({ message: status });
// Q1. Implement a simple add to cart feature.
// Q2. Implement a simple todo items list



//  check this here for the other version

// const bankAccounts = [];

// const addBankAccount = (name, balance, accountNo) => {
//   // local variable (local scope) account
//   const account = {
//     name: name,
//     balance: balance,
//     accountNumber: accountNo,
//   };
//   bankAccounts.push(account); // global variable // global scope
// };

// const findAccountByName = (accountNumber) => {
//   const account = bankAccounts.find(function (acc) {
//     if (acc.accountNumber === accountNumber) {
//       return true;
//     }
//     return false;
//   });

//   return account;
// };


// function bankTransfer(sender, receiver, amount) {
//   const senderAccount = findAccountByName(sender);
//   const receiverAccount = findAccountByName(receiver);
//   if (senderAccount == undefined) {
//     return "Invalid account number for sender";
//   }
//   if (receiverAccount == undefined) {
//     return "Invalid account number for Receiver";
//   }
//   if (senderAccount.balance < amount) {
//     return `${senderAccount.name} has Insufficient balance`;
//   }
//   receiverAccount.balance += amount;
//   senderAccount.balance -= amount;
//   return {
//     amount: amount,
//     description: `${senderAccount.name} transfered ${amount} to ${receiverAccount.name}`,
//     date: new Date(),
//   };
// }

// console.log(bankAccounts.length, "before adding");

// addBankAccount("Luke", 2000, "34567898");
// addBankAccount("Princess", 100000, "09876545");

// console.log(bankAccounts.length, "after adding");
// console.log(bankAccounts, "DAtABASE");

// const status = bankTransfer("34567898", "09876545", 100);
// console.log({ message: status });
// // Q1. Implement a simple add to cart feature.
// // Q2. Implement a simple todo items list

 
  