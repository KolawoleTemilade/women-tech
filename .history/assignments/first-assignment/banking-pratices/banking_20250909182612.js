let account1 = {

    name: "Toluwani",
    balance: 300000,
    currency: "USD",
    type: "savings"
};

let account2 = {

    name: "Eduaina",
    balance: 400000,
    currency: "USD",
    type: "checking"
};
let account3 = {

    name: "Mariam",
    balance: 700000,
    currency: "NGN",
    type: "checking"
};
let account4 = {

    name: "Blessing",
    balance: 800000,
    currency: "NGN",
    type: "savings"
};


// adding deposit
let incomingAmount = 50000.

let newAcct2Balance = account2.balance + incomingAmount
console.log (`this is the new balance for account2 : USD ${newAcct2Balance}`)

let newAcct4Balance = account4.balance +
incomingAmount
console.log (`this is the new balance for account4 : NGN ${newAcct4Balance}`)


// simulating withdrawals