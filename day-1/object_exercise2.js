const personAccount = {
  firstName: "Azarel",
  lastName: "Grahandito",
  income: [
    { amount: 1000, description: "salary" },
    { amount: 2000, description: "bonus" },
    { amount: 3000, description: "overtime" },
  ],
  expenses: [
    { amount: 500, description: "rent" },
    { amount: 100, description: "food" },
    { amount: 200, description: "transport" },
  ],
  totalIncome: function() {
    let total = 0;
    for (let i = 0; i < this.income.length; i++) {
      total += this.income[i].amount;
    }
    return total;
  },
  totalExpense: function() {
    let total = 0;
    for (let i = 0; i < this.expenses.length; i++) {
      total += this.expenses[i].amount;
    }
    return total;
  },
  accountInfo: function() {
    return this.firstName + " " + this.lastName;
  },
  addIncome: function(amount, description) {
    this.income.push({ amount, description });
  },
  addExpense: function(amount, description) {
    this.expense.push({ amount, description });
  },
  accountBalance: function() {
    return this.totalIncome() - this.totalExpense();
  }
}

console.log(personAccount.accountBalance())
