import React,{useState} from "react";

import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card';
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props){
    const [filteredYear,setFilteredYear]=useState('2019');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
        console.log(selectedYear);
    };

    return(
        <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
        <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>

        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>


        </Card >
    );
}
export default Expenses;