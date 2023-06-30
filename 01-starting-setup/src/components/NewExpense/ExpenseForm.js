import React,{useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props){ 

    const [enteredTitle, setEnteredTitle]=useState('');
    const [enteredAmount, setEnteredAmount]=useState('');
    const [enteredDate, setEnteredDate]=useState('');

    //const [ userInput, setUserInput ]=useState({
    //    enteredTitle:'',
    //    enteredAmount:'',
    //    enteredDate:''
    //}
    //);

    const titleChangeHandler = (event) =>{

        setEnteredTitle(event.target.value);

        //setUserInput(
        //    {
        //        ...userInput,
        //        enteredTitle: event.target.value,
        //    }
        //)

        //setUserInput((prevState) => {     //동시에 여러 입력을 받으면 잘못되거나 오래된 데이터를 복사해 올 수 있어서 이 방법이 바로 위의 방법보다는 안전함
        //  return {...prevState, enteredTitle: event.target.value};
        //  }
        //
        //  );
    };

    const amountChangeHandler = (event) =>{

        setEnteredAmount(event.target.value);
        //console.log(event.target.value);
        //setUserInput(
        //    {
        //        ...userInput,
        //        enteredAmount: event.target.value,
        //    }
        //)
    };

//    const dateChangeHandler =  (event) =>{
//
//        setEnteredDate(event.target.value);
//        console.log(event.target.value);
//    };
    function dateChangeHandler (event){
        setEnteredDate(event.target.value);
        //console.log(event.target.value);
        //setUserInput(
        //    {
        //        ...userInput,
        //        enteredDate: event.target.value,
        //    }
        //)
    };

    const submitHandler = (event) =>{
        event.preventDefault();     //기본 요청이 보내지는 것을 막을 수 있음

        const expenseData ={
            title : enteredTitle,
            amount: enteredAmount,
            date : new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return(
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
            <div className='new-expense__control'>
                    <label>
                        Title
                    </label>
                    <input
                        type='text'
                        value={enteredTitle} 
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>
                        Amount
                    </label>
                    <input 
                        type='number' 
                        min='0.01' 
                        step='0.01' 
                        value={enteredAmount} 
                        onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>
                        Date
                    </label>
                    <input 
                        type='date' 
                        min ='2000-01-01' 
                        max='2022-12-31'  
                        value={enteredDate} 
                        onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type='submit'>Add</button>
            </div>
        </form>
    );
}
export default ExpenseForm;