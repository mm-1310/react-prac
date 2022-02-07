import React, { useState } from "react";

import "./NewExpense.css";

import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  // state for alternate button and form layout
  const [isEditing, setIsEditing] = useState(false)

  // assign ID and pass data to parent
  const onSaveExpenseDataHanlder = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // show form
  const startEditingHandler = () => {
    setIsEditing(true);
  };

  //show Add New Expense button
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
      {isEditing &&
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHanlder}
          onCancel={stopEditingHandler}
        />
      }
    </div>
  );
};

export default NewExpense;
