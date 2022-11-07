let myAccount = {
    name: 'Alyssa',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amt) {
    account.expenses += amt;
}

// addExpense(myAccount, 2.5);
// console.log(myAccount);

// add income to account
const addIncome = function (account, amt) {
    account.income += amt;
}

// reset account 
    // reset expenses and income to 0
const resetAccount = function (account) {
    account.expenses = 0;
    account.income = 0;
}

// getAccountSummary
    // Account for Andrew has total, num in come, num in expenses
const getSummary = function (account) {
    let balance = account.income - account.expenses
    return `Account for ${account.name} has ${account.income} in income and ${account.expenses} in expenses for a balance of ${balance}.`;
}

// add some income
// add expense
// add expense
// get account summary
// reset account
// getaccount summary


addIncome(myAccount, 1000);
addExpense(myAccount, 50);
addExpense(myAccount, 10);
console.log(getSummary(myAccount));
resetAccount(myAccount);
console.log(getSummary(myAccount));
