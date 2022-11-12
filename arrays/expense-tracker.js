const account = {
  name: "Alyssa",
  expenses: [],
};

// add expense method --> description, amount , updates expenses array with object
// add getAccountSummary method, takes no arg, adds up all expenses, prints message

account.income = [];

account.addExpense = function (descrip, amt) {
  this.expenses.push({ description: descrip, amount: amt });
};

account.getAccountSummary = function () {
  let totalExp = 0;
  this.expenses.forEach((el) => {
    totalExp += el.amount;
  });
  let totalInc = 0;
  this.income.forEach((element) => {
    totalInc += element.amount;
  });
  return `${this.name} has a balance of $${(totalInc - totalExp).toFixed(
    2
  )}, $${totalInc.toFixed(2)} in income, and $${totalExp.toFixed(
    2
  )} in expenses`;
};

account.addIncome = function (descrip, amt) {
  this.income.push({ description: descrip, amount: amt });
};

account.addExpense("coffee", 5.5);
account.addExpense("computer", 1000);
account.addExpense("rent", 1500);
// console.log(account.expenses);

account.addIncome("work", 3000);
account.addIncome("babysitting", 200);
console.log(account.getAccountSummary());

// add income array
// add addIncome method
// tweak account summary
