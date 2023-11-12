import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Form from './components/Form';

export default function Transactions() {
  const [userTransactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const apiURL = "http://localhost:3000/transactions"

  useEffect(() => {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setTransactions(data)
    setFilteredTransactions(data)
  })
},[])
    
  const handleSearch = (query) => {
    const filtered = userTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(query.toLowerCase())
  )
  setFilteredTransactions(filtered);
}
  const handleAddTransactions = (newTransaction) => {
    setTransactions([...userTransactions, newTransaction]);
    setFilteredTransactions([...userTransactions, newTransaction]);
  }
  
  return (
   <>
   <h1 id="heading">User Transactions</h1>
   <Searchbar onSearch={handleSearch}/>
   <ul id="table">
    {filteredTransactions.map(transaction => (
      <li key={transaction.id}>
         <h4>Date: {transaction.date}</h4>
         <p>Description: {transaction.description}</p>
         <p>Category: {transaction.category}</p>
         <p>Amount: {transaction.amount}</p> 
         <hr />
      </li>
    ))}
   </ul>
   <Form onAddTransaction={handleAddTransactions} />
   <p id='track'>Track your spending with ease :)</p>
   </>
  );
  }
