import React, { useEffect, useState } from 'react';
import Searchbar from './components/Searchbar';
import Form from './components/Form';
import Header from './components/Header';
import Table from './components/Table';

export default function Transactions() {
  const [userTransactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const apiURL = "https://my-json-server.typicode.com/josephmangara/H/transactions"

  //fetching data online
  useEffect(() => {
  fetch(apiURL)
  .then(response => response.json())
  .then(data => {
    console.log(data)
    setTransactions(data)
    setFilteredTransactions(data)
  })
},[])
    
//function for searching transactions by description
  const handleSearch = (query) => {
    const filtered = userTransactions.filter((transaction) =>
    transaction.description.toLowerCase().includes(query.toLowerCase())
  )
  setFilteredTransactions(filtered);
}

//function for adding transactions 
  const handleAddTransactions = (newTransaction) => {
    setTransactions([...userTransactions, newTransaction]);
    setFilteredTransactions([...userTransactions, newTransaction]);
  }
  
//function for deleting transactions
const deleteTransaction = (id) => {
  const updatedTransactions = userTransactions.filter((transaction) => transaction.id !== id);
  setTransactions(updatedTransactions);
  setFilteredTransactions(updatedTransactions);
}


//rendering components
  return (
   <>
   <Header />
   <Searchbar onSearch={handleSearch}/>
   <Table filteredTransactions={filteredTransactions} onDelete={deleteTransaction} />
   
   <hr />
   <Form onAddTransaction={handleAddTransactions} />
   <p id='track'>Track your spending with ease :)</p>
   
   </>
  );
  }
