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



const deposit = 50000
const withdawal = 400000

// simulating deposit
account2.balance += deposit
console.log (`${account2.name}'s new balance is ${account2.currency} ${account2.balance}`)

account4.balance +=
deposit
console.log (`${account4.name}'s new balance is ${account4.currency} ${account4.balance}`)


// simulating withdrawals

if (account1.balance >= withdawal) {
    console.log (`this is the new balance for Toluwani ${account1.balance - withdawal}`)
}else{
    console.log (`withdrawal denied for ${account1.name}: insufficient funds`)
}


if (account3.balance > withdawal) {
    console.log (`this is the new balance for Mariam ${account3.balance -= withdawal}`)
}else{
    console.log (`withdrawal denied for ${account3.name}: insufficient funds`)
}

// transferring between same currency accounts

if (account1.currency === account2.currency) {
    console.log (`${account2.name}'s account credited with ${account2.balance += deposit} &`);

    console.log (`${account1.name} just got debited and balance remains ${account1.balance -= deposit}`);
}else{
    console.log ("Transfer failed: currency mismatch")
}

// transferring between diff currency accounts
if (account2.currency === account3.currency) {
    console.log (`${account3.name}'s account credited with ${account3.balance += deposit} &`);

    console.log (`${account2.name} just got debited and balance remains ${account2.balance -= deposit}`);
}else{
    console.log ("Transfer failed: currency mismatch")
}

// monthly maintenance
let rate = 0.05  //5%
let time = 1 //1 year

let fees = 20

if (account1.type === "savings") {
    let interest = account1.balance * rate * time
    console.log (`interest balance in a year is ${account1.currency +" " + interest}`)
    console.log (`the new balance for ${account1.name} with interest is now ${account1.balance + interest}`)
} else { 
    console.log (`new balance for ${account1.name} with checking fee is now ${account1.balance - fees}`)
}


if (account2.type === "savings") {
    let interest = account1.balance * rate * time
    console.log (`interest balance in a year is ${account2.currency +" " + interest}`)
    console.log (`the new balance for ${account2.name} with interest is now ${account2.balance + interest}`)
} else { 

    console.log (`new balance for ${account2.name} with checking is now ${account2.balance - fees}`)
};

if (account3.type === "savings") {
    let interest = account1.balance * rate * time
    console.log (`interest balance in a year is ${account3.currency +" " + interest}`)
    console.log (`the new balance for ${account3.name} with interest is now ${account3.balance+ interest}`)
}
 else { 
    console.log (`new balance for ${account3.name} with checking is now ${account3.balance - fees}`)
};

if (account4.type === "savings") {
    let interest = account1.balance * rate * time
    console.log (`interest balance in a year is ${account4.currency +" " + interest}`)
    console.log (`the new balance for ${account4.name} with interest is now ${account4.balance + interest}`)
} else { 
    console.log (`new balance for ${account4.name} with checking is now ${account4.balance - fees }`)
}
//  comparisons with highest balance
if ( account1.balance );
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


