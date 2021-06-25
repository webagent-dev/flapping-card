import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Form({ handleSubmit, catRef, amountRef}) {
    const [category, setCategory] = useState([])
   
  useEffect(() => {
    axios.get('https://opentdb.com/api_category.php')
    .then((res) => {
    const data = res.data.trivia_categories
        setCategory(data)
    })
  }, [])

  
    return (
        <section className='form-container'>
        <h2 className="head">sort your questions❓</h2>
         <form onSubmit={handleSubmit} className='flex'> 
            <label htmlFor="category">category:</label>
            <select className='select' ref={catRef} >
            {
                category.map((cat) => {
                    return  <option key={cat.id} value={cat.id}>{cat.name}</option>
                })
            }
            </select>
        <label htmlFor="amount">amount:</label>
        <input type='number' min='1' max='50' defaultValue='30' ref={amountRef}/>
        <button className='btn'>generate</button>
        </form>
        </section>
    )
}

export default Form
