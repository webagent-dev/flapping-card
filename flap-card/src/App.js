import React, { useRef, useState, useEffect} from 'react'
import './App.css';
import FlipCardList from './comps/FlipCardList'
import Form from './comps/Form'
import axios from 'axios'
function App() {
   const catRef = useRef()
    const amountRef = useRef()
  const [loading, setLoading] = useState(true)
  const [card, setCard] = useState([])
  // where i decode html codes
  const decode = (str) => {
    const textarea = document.createElement('textarea')
    textarea.innerHTML = str
    return textarea.value
  }
// useEffect for calling intial data
  useEffect(() => {
    setLoading(true)
      axios.get('https://opentdb.com/api.php?amount=30')
      .then((res) => {
        const data = res.data.results.map((item, index) => {
const id = index + new Date().getTime().toString()
const answer = decode(item.correct_answer)
const question = decode(item.question)
const options = [...item.incorrect_answers, answer]

          return {
            id: id,
            answer: answer,
            question: question,
            option: options.sort(() => Math.random() - .5)
          }
        })
         setCard(data)
         setLoading(false)
      }).catch((err) => {
        console.error(err)
        setLoading(true)
      })
     
  },[])
  // function for fetching to sort the form
  const handleSubmit = (e) => {
    e.preventDefault()
     setLoading(true)
      axios.get('https://opentdb.com/api.php',{
        params: {
          amount: amountRef.current.value,
          category: catRef.current.value
        }
      }).then((res) => {
        const data = res.data.results.map((item, index) => {
const id = index + new Date().getTime().toString()
const answer = decode(item.correct_answer)
const question = decode(item.question)
const options = [...item.incorrect_answers, answer]

          return {
            id: id,
            answer: answer,
            question: question,
            option: options.sort(() => Math.random() - .5)
          }
        })
         setLoading(false)
         setCard(data)
      }).catch((err) => {
        console.error(err)
        setLoading(true)
      })
      
  }

  return  (
        <div className='container'>
      <Form catRef={catRef} amountRef={amountRef} handleSubmit={handleSubmit}/>
        { loading ? <h1 style={{textAlign: 'center',color:'red',fontSize:'30px',padding:'5px'}}>Loading...</h1> : <FlipCardList  flipCard={card}/> }
      </div>
     );
}

export default App;
