import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GloablState';

const AddTransaction = () => {
    const {addTransaction}=useContext(GlobalContext);

    const [text,setText]=useState('');
    const [amount,setAmount]=useState(0);

    const handleSubmit=()=>{
        const newTransaction={
            id: Math.floor(Math.random()*100000000),
            text: text,
            amount:+amount
        }
        addTransaction(newTransaction)
    }
    return (
        <>
            <h3>Add new transaction</h3>
                <div className="form-control">
                    <label htmlFor="text">Transaction Name:</label>
                    <input type="text" placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)} />
                </div>
                <br />
                <div className="form-control">
                    <label htmlFor="text">Amount:</label>
                    <input type="number" placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                </div>
                <button className="btn" onClick={()=>handleSubmit()}>Add transaction</button>
        </>
    );
}

export default AddTransaction;
