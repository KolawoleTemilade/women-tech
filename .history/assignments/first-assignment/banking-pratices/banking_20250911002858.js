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

// rewriting a clean code 

const deposit = 50000
const withdawal = 400000

// simulating deposit
console.log("***simulating deposit***")
account2.balance += deposit
console.log(account2.name + " " + "new balance after deposit is" + " " + account2.currency + " " + account2.balance)

account4.balance += deposit
console.log(`${account4.name}'s new balance after deposit is ${account4.currency} ${account4.balance}`)

console.log(" ")

// simulating withdrawals
console.log("***simulating withdrawals***")

if (account1.balance >= withdawal) {
    console.log("withdrawal successful...")
    console.log(`${account1.name} has been debited and balance remains ${account1.balance - withdawal}`)
} else {
    console.log(`withdrawal denied for ${account1.name}: insufficient funds`)
}

if (account3.balance > withdawal) {
    console.log("withdrawal successful...")
    console.log(`${account3.name} has been debited and balance remains ${account3.balance -= withdawal}`)
} else {
    console.log(`withdrawal denied for ${account3.name}: insufficient funds`)
}
console.log(" ")

// transferring between same currency accounts

console.log("***transfering between same accounts***")

if (account1.currency == account2.currency) {
    console.log("transfer successful...")
    console.log(`${account2.name}'s account credited with ${account2.balance += deposit} &`);

    console.log(`${account1.name} just got debited and balance remains ${account1.balance -= deposit}`);
} else {
    console.log("Transfer failed: currency mismatch")
}

console.log("")

// transferring between diff currency accounts
console.log("***transferring between different accounts***")
if (account2.currency === account3.currency) {
    console.log("transfer successful...")
    console.log(`${account3.name}'s account credited with ${account3.balance += deposit} &`);

    console.log(`${account2.name} just got debited and balance remains ${account2.balance -= deposit}`);
} else {
    console.log("Transfer failed: currency mismatch")
}

console.log("")

// monthly maintenance
let rate = 0.05  //5%
// let time = 1 //1 year

// since others are not using year, ill be commenting out the year and removing it from the rest of the code

let fees = 20

console.log("***monthly maintenance with savings and checkings***")

if (account1.type === "savings") {
    let interest = account1.balance * rate 
    console.log(`interest gained is${account1.currency + " " + interest}`)
    console.log(`the new balance for ${account1.name} with interest is now ${account1.balance + interest}`)
} else {
    console.log("fees deducted")
    console.log(`new balance for ${account1.name} with checking fee is now ${account1.balance - fees}`)
}


if (account2.type === "savings") {
    let interest = account1.balance * rate 
    console.log(`interest gained is ${account2.currency + " " + interest}`)
    console.log(`the new balance for ${account2.name} with interest is now ${account2.balance + interest}`)
} else {
    console.log("fees deducted..")
    console.log(`new balance for ${account2.name} with checking is now ${account2.balance - fees}`)
};

if (account3.type === "savings") {
    let interest = account1.balance * rate 
    console.log(`interest gained is ${account3.currency + " " + interest}`)
    console.log(`the new balance for ${account3.name} with interest is now ${account3.balance + interest}`)
}
else {
    console.log("fees deducted..")
    console.log(`new balance for ${account3.name} with checking is now ${account3.balance - fees}`)
};

if (account4.type === "savings") {
    let interest = account1.balance * rate 
    console.log(`interest gained is ${account4.currency + " " + interest}`)
    console.log(`the new balance for ${account4.name} with interest is now ${account4.balance + interest}`)
} else {
    console.log("fees deducted..")
    console.log(`new balance for ${account4.name} with checking is now ${account4.balance - fees}`)
}

console.log("")
//  for comparrison, i have to convert everthing to a single currency.. going for naira in this case.
console.log("***comparison between accounts***")
console.log("balances before conversion" , account1.balance, account2.balance, account3.balance, account4.balance)
let exchangeRate = 1500; 

let account1NGN = account1.currency === "NGN" ? account1.balance : account1.balance * exchangeRate;
let account2NGN = account2.currency === "NGN" ? account2.balance : account2.balance * exchangeRate;
let account3NGN = account3.currency === "NGN" ? account3.balance : account3.balance * exchangeRate;
let account4NGN = account4.currency === "NGN" ? account4.balance : account4.balance * exchangeRate;


console.log("balances after conversion", account1NGN, account2NGN, account3NGN, account4NGN);

let highest = {
    name: account1.name, 
    value: account1NGN, 
}
let lowest = {
    name: account1.name, 
    value: account1NGN, 
}

account2 = {
    name: account2.name
    value : account2NGN                
}
account3 = {
    name: account3.name
    value : account3NGN                
}
account4 = {
    value : account4NGN                
}




if (account2NGN > highest.value)
{
    highest = account2NGN
}
if (account3NGN > highest.value)
{
    highest = account3NGN
}
if (account4NGN > highest.value)
{
    highest = account4NGN
}
console.log("the highest is"  + "with " + "" + highest.value)


// if (account1NGN > account2NGN) {
//     console.log(`${account1.name} has more money than ${account2.name}`)
// } else (
//     console.log(`${account2.name} has higher money `)
// )
// if (account2.balance > account3.balance) {
//     console.log(`${account2.name} has more money than ${account3.name}`)
// } else (
//     console.log(`${account3.name} has higher money `)
// )
// if (account3.balance > account4.balance) {
//     console.log(`${account3.name} has more money than ${account4.name}`)
// } else (
//     console.log(`${account4.name} has higher money `)
// ) 


// status check
if (account1.balance > 0) {
    console.log("account is active")
} else if (account1.balance === 0) {
    console.log("account is empty")
} else if (account1.balance < 0) {
    console.log("account is overdrawn")
} else {
    console.log("")
}

if (account2.balance > 0) {
    console.log("account is active")
} else if (account2.balance === 0) {
    console.log("account is empty")
} else if (account2.balance < 0) {
    console.log("account is overdrawn")
} else {
    console.log("")
}


if (account3.balance > 0) {
    console.log("account is active")
} else if (account3.balance === 0) {
    console.log("account is empty")
} else if (account3.balance < 0) {
    console.log("account is overdrawn")
} else {
    console.log("")
}


if (account4.balance > 0) {
    console.log("account is active")
} else if (account4.balance === 0) {
    console.log("account is empty")
} else if (account4.balance < 0) {
    console.log("account is overdrawn")
} else {
    console.log("")
}
console.log("")

console.log("final balances")
console.log(`${account1.name} new balance is ${account1.currency} ${account1.balance}`)
console.log(`${account2.name} new balance is ${account2.currency} ${account2.balance}`)
console.log(`${account3.name} new balance is ${account3.currency} ${account3.balance}`)
console.log(`${account4.name} new balance is ${account4.currency} ${account4.balance}`)