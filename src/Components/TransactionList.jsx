import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GloablState';

const TransactionList = () => {
    const {transactions}=useContext(GlobalContext);
    const {deleteTransaction}=useContext(GlobalContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map((transaction,index)=>(
                    <li key={index} className={transaction.amount < 0 ? 'minus' : 'plus'}>
                        {transaction.text} <span>{transaction.amount < 0 ? '-' : ''}${Math.abs(transaction.amount)}</span><button  onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
                    </li>
                ))}
            </ul> 
        </>
    );
}

export default TransactionList;
