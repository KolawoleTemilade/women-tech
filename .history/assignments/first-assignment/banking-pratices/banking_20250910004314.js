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

    console.log (`${account1.name} just got debited and balance remains ${account1.balance -= deposit}`);
}else{
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
let rate = 0.05  //5%
let time = 1 //1 year

let fees = 20

if (account1.type === "savings") {
    console.log (`interest balance in a year is ${account1.currency +" " + account1.balance * rate * time}`)
    console.log (`the new balance for ${account1.name} with interest is now ${account1.balance * rate * time + account1.balance}`)
} else { 
    // console.log (`this is a checkings account type ${account1.balance + deposit - withdawal}`) 
    
    console.log (`new balance for ${account1.name} with checking is now ${account1.balance + deposit - withdawal- fees}`)
    //so for this, i was thinking if i should multiply the deposit by the number of days(30) and also the withdrawal, but im not too certain as deposit and withdrawals are not made everyday
}


if (account2.type === "savings") {
    console.log (`interest balance in a year is ${account2.currency +" " + account2.balance * rate * time}`)
    console.log (`the new balance for ${account2.name} with interest is now ${account2.balance * rate * time + account2.balance}`)
} else { 
    // console.log (account2.balance + deposit - withdawal)

    console.log (`new balance for ${account2.name} with checking is now ${account2.balance + deposit - withdawal - fees}`)
};

if (account3.type === "savings") {
    console.log (`interest balance in a year is ${account3.currency +" " + account3.balance * rate * time}`)
    console.log (`the new balance for ${account3.name} with interest is now ${account3.balance * rate * time + account3.balance}`)
}
 else { 
    // console.log (account3.balance + deposit - withdawal - fees) 

    console.log (`new balance for ${account3.name} with checking is now ${account3.balance + deposit - withdawal - fees}`)
};

if (account4.type === "savings") {
    console.log (`interest balance in a year is ${account4.currency +" " + account4.balance * rate * time}`)
    console.log (`the new balance for ${account4.name} with interest is now ${account4.balance * rate * time + account4.balance}`)
} else { 
    console.log (account4.balance + deposit - withdawal - fees) 

    console.log (`new balance for ${account4.name} with checking is now ${account4.balance - account4.balance + deposit - withdawal - fees }`)
}
//  comparisons with highest balance
// if ();
// status check
if (account1.balance > 0){
    console.log("account is active")
}else if (account1.balance === 0){
    console.log("account is empty")
}else if (account1.balance < 0){
    console.log("account is overdrawn")
} else {
    console.log("")
}

if (account2.balance > 0){
    console.log("account is active")
}else if (account2.balance === 0){
    console.log("account is empty")
}else if (account2.balance < 0){
    console.log("account is overdrawn")
} else {
    console.log("")
}


if (account3.balance > 0){
    console.log("account is active")
}else if (account3.balance === 0){
    console.log("account is empty")
}else if (account3.balance < 0){
    console.log("account is overdrawn")
} else {
    console.log("")
}


if (account4.balance > 0){
    console.log("account is active")
}else if (account4.balance === 0){
    console.log("account is empty")
}else if (account4.balance < 0){
    console.log("account is overdrawn")
} else {
    console.log("")
}