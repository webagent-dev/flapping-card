import React, { useState} from 'react'
    import  Comment from './Comment'
function About() {
    const [comment, setComment] = useState(false)

    
    return (
        <>
        <div className='about-container'>
                <h1>Thanks💁‍♂️ For visiting my site🖱️</h1>
                <h3> dont forget to leave a comment〽️</h3>
                <p>welcome to fun world this website was Created by <strong>WEBAGENT-DEV</strong> with <strong>CREATE-REACT-APP AND FIREBASE FOR BACKEND</strong> the site was create for fun and addy to  my porfolio. kindly comment.......<br/>
                😄Fun General Question&Answer🥰 as the name suggests was a Q&A funny🌝 question from an API server
             that generate random questions,❔ you can see answers by just clicking the question and it will flip to show the answer. <b>HAVE FUN</b>
                </p>
                <button onClick={() => setComment(true)}>click to comment</button>
        </div>
        {
            comment && <Comment />
        }
        </>
        
    )
}

export default About
