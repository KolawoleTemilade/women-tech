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
    balance: 80000,
    currency: "NGN",
    type: "savings"
};



const deposit = 50000.
const withdawal = 400000

// simulating deposit
account2.balance += deposit
console.log (`this is the new balance for Eduaina : USD ${account2.balance}`)

account4.balance +=
deposit
console.log (`this is the new balance for Blessing : NGN ${account4.balance}`)


// simulating withdrawals

if (account1.balance > withdawal) {
    console.log (`this is the new balance for Toluwani ${account1.balance -= withdawal}`)
}else{
    console.log (`withdrawal denied for ${account1.name}: insufficient funds`)
}


if (account3.balance > withdawal) {
    console.log (`this is the new balance for Mariamx ${account3.balance -= withdawal}`)
}else{
    console.log (`withdrawal denied for ${account3.name}: insufficient funds`)
}

// transferring between accounts

if (account1.currency == account2.currency) {
    console.log (`Eduaina's account credited with ${account2.currency += deposit} &`);
    console.log (`Toluwani just got debited and balance remains ${account1}`)


}else{
    console.log (`withdrawal denied for ${account3.name}: insufficient funds`)
}
