import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpenseChart from "./ExpenseChart";
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2019');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(filteredYear);
    };

    const filteredExpense =props.items.filter(expense => expense.date.getFullYear().toString()==filteredYear );


    return(
        <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            {/*{filteredExpense.length===0 &&<p>No expense found</p>}
            {filteredExpense.length>0&&filteredExpense.map((expense) => (
            <ExpenseItem
                key={expense.id}
                title={expense.title} 
                amount={expense.amount} 
                date={expense.date}
                 />
            ))}*/}

            <ExpenseChart expenses={filteredExpense}></ExpenseChart>

            <ExpensesList items={filteredExpense}/>


        


        </Card >
    );
}
export default Expenses;