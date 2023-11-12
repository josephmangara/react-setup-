import React, {useState} from "react";

function Form(props) {
    const [newTransaction, setNewTransaction] =  useState({
        date: "",
        description: "",
        category: "",
        amount: "",
    });

    function handleChange(event){
        const { name, value} = event.target;
        setNewTransaction((prevTransaction) => ({
            ...prevTransaction,
            [name]: value
        }));
  //      setTransactions(event.target.value);
    }
 function handleSubmit(event){
    event.preventDefault();
    props.onAddTransaction(newTransaction);

    setNewTransaction({
        date: "",
        description: "",
        category: "",
        amount: "",
    });
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
        <div>
        <input
          type="text"
          name="date"
          value={newTransaction.date}
          onChange={handleChange}
       />
       <label>Date</label>
       </div>
       <div>
      
      <input 
         type="text"
         name="description"
         value={newTransaction.description}
         onChange={handleChange}
       />
       <label>Description</label>
      </div>
      <div>
      
      <input
        type="text"
        name="category"
        value={newTransaction.category}
        onChange={handleChange}
      />
      <label>Category</label>
      </div>
      <div>
      
      <input
        type="text"
        name="amount"
        value={newTransaction.amount}
        onChange={handleChange}
      />
      <label>Amount</label>
      </div>
      <button type="submit">Add transaction</button>
    </form>
    );
}

export default Form;