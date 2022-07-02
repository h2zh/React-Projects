import React, { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const [filterYear, changeFilterYear] = useState("2020");

  const filterChangeHandler = (year) => {
    changeFilterYear(year);
  };

  // If you've already got data in a component and you just want to 
  // change how it render (e.g. how many elements in an array should be rendered), 
  // then a transformation like this should be enough:
  const selectedExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expenseContent = <p>No matched expense.</p>;
  if( selectedExpenses.length > 0){
    expenseContent = selectedExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onFilter={filterChangeHandler}
          selectedYear={filterYear}
        />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
