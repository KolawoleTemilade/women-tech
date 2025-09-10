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
    console.log (`this is the new balance for Mariam ${account3.balance -= withdawal}`)
}else{

    console.log (`withdrawal denied for ${account3.name}: insufficient funds`)
}

// transferring between same currency accounts

if (account1.currency == account2.currency) {
    console.log (`${account2.name}'s account credited with ${account2.currency += deposit} &`);

    console.log (`${account1.name} just got debited and balance remains ${account1.balance -= deposit}`);}else{

    console.log ("Transfer failed: currency mismatch")
}

// transferring between diff currency accounts
if (account2.currency == account3.currency) {
    console.log (`${account3.name}'s account credited with ${account3.currency += deposit} &`);

    console.log (`${account2.name} just got debited and balance remains ${account2.currency -= deposit}`);
}else{
    console.log ("Transfer failed: currency mismatch")
}

// monthly maintenance

// for savings 
let rate = 0.05  //5%
let time = 1 //1 year

if (account1.type === "savings") {
    console.log (account1.balance * rate * time +)
    console.log (`new account1 balace plus interest `)
}else {
    console.log (account1.balance + deposit - withdawal) //so for this, i was thinking if i should multiply the deposit by the number of days(30) and also the withdrawal, but im not too certain as deposit and withdrawals are not made everyday.

}

