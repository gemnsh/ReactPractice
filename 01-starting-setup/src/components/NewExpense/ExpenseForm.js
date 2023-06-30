import React,{useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(){ 

    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    const titleChangeHandler = (event) =>{

        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) =>{

        setEnteredAmount(event.target.value);
        console.log(event.target.value);
    };

//    const dateChangeHandler =  (event) =>{
//
//        setEnteredDate(event.target.value);
//        console.log(event.target.value);
//    };
    function dateChangeHandler (event){
        setEnteredDate(event.target.value);
        console.log(event.target.value);
    ;}
    
    return(
        <form>
            <div className='new-expense__controls'>
            <div className='new-expense_control'>
                    <label>
                        Title
                    </label>
                    <input type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense_control'>
                    <label>
                        Amount
                    </label>
                    <input type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className='new-expense_control'>
                    <label>
                        Date
                    </label>
                    <input type='date' min ='2000-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add</button>
            </div>
        </form>
    );
}
export default ExpenseForm;