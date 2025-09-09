let monthlyIncome = 250000
let dailyExpenses = 2500
let monthlyExpenses = 12000
let savings = 100000
let spendings = (dailyExpenses * 30 ) + monthlyExpenses   //calculating the daily expenses together with the total days in a month 

// calculating the total expenses
let totalExpenses = spendings + savings;

// calculating the final balance
let finalBalance = monthlyIncome - totalExpenses;

// print results

console.log(`monthy income: ${monthlyIncome}`);
console.log(`daily expenses : ${dailyExpenses}`);
console.log(`monthly expenses: ${monthlyExpenses}`);
console.log(`my savings : ${savings}`);
console.log(`my final balance: ${finalBalance}`)



let remainder = monthlyIncome - (dailyExpenses + monthlyExpenses + savings + spendings);

console.log (`what is left of my monthly income is ${remainder}`)