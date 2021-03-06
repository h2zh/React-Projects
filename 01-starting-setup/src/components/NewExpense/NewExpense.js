import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => { // input name is customizable
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('In NewExpense.js');
        console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return(
        <div className='new-expense'>
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    );
}

export default NewExpense;