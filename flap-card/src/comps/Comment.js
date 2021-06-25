import React, { useState, useEffect } from 'react'
import { db, timeStamp } from '../firebase'
// const messange = {
//     fontSize: '30px',
//     padding: '10px 20px',
//     b0orderRadius: '5px',
// }
   
function Comment() {
   
   const [loading, setLoading] = useState(true)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [textarea, setTextArea] = useState('')
    const [ comment, setComment] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault()
        const id = new Date().getTime().toString()
        if(name && email && textarea){
            db.collection('comment').add({
                id:id,
                name: name,
                email: email,
                textarea: textarea,
                createdAt: timeStamp
            }).then(() =>{
                setName('')
                setEmail('')
                setTextArea('')
            }).catch((err) => {
                console.log(err)
            })
        }
        return null
    }
    //  getting data from DatabASE
   useEffect(() => {
       setLoading(true)
   const unSud = db.collection('comment')
        .onSnapshot((snap) => {
            const document = []
            snap.forEach((doc) => {
            const data =doc.data()
                document.push(data)
                setComment(document)
                setLoading(false)
            })
            
        })
        return () => unSud()
   },[])
    return (
        <div className='comment-container'>
                   <form className='form-wrapper' onSubmit={handleSubmit}>
                       <label htmlFor='full-name'>Full-Name</label>
                           <input type='name' className='input' value={name} required  onChange={(e) => setName(e.target.value)}/>
                       <label htmlFor='email'>Email</label>
                           <input type='email' className='input' value={email} required onChange={(e) => setEmail(e.target.value)} />
                    <textarea placeholder='say your mind'  name='textarea' value={textarea} required  onChange={(e) => setTextArea(e.target.value)}/>
                    <button type='submit' className='btn'>Comment</button>
        </form>
<br />
<hr />
<br />
              {!loading ? comment.map((doc) => {
                  const {id, name, email, textarea } = doc
                  return (
                        <section className='comment' key={id}>
                   <div className='post'>
                       <h1>✅</h1>
                   <p className='comment'>{textarea}</p>
                   <h1>😃</h1>
                   </div>
                   <div className='display'>
                         <h1 className='name'> comment-By:<strong>{name}</strong></h1>
                   <h3 className='email'>Email:<strong>{email}</strong></h3>
                   </div>
               </section>
                  )
              })

              : <h1 style={{textAlign: 'center',color:'red',fontSize:'30px',padding:'5px'}}>Loading...</h1>
              }

 </div>   
    )
}

export default Comment
