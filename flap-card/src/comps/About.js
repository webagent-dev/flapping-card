import React, { useEffect } from 'react'
    import  Comment from './Comment'
    import { auth } from '../firebase'
    import { useAuth } from '../context/AuthContext'
    import firebase from '../firebase'
function About() {
    const {user} = useAuth()

    useEffect(() => {
      document.title = 'Flap-Card/About'
      
  },[])
    return (
        <>
        <div className='about-container'>
                <h1>Thanks💁‍♂️ For visiting my site🖱️</h1>
                <h3> dont forget to leave a comment〽️</h3>
                <p>welcome to fun world this website was Created by <strong>WEBAGENT-DEV</strong> with <strong>CREATE-REACT-APP AND FIREBASE FOR BACKEND</strong> the site was create for fun and addy to  my porfolio. you can view the source-code om my <a href='https://github.com/webagent-dev/flapping-card.git' target='blank'>GitHub-Profile</a> kindly comment.......<br/>
                😄Fun General Question&Answer🥰 as the name suggests was a Q&A funny🌝 question from an API server
             that generate random questions,❔ you can see answers by just clicking the question and it will flip to show the answer. <b>HAVE FUN</b>
                </p>
                <div>
                    {user ? <button onClick={() => auth.signOut()}>logout</button>
                    : 
                    <button onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>login to comment</button>
                    }
               </div>
        </div>

                {user && <Comment />}
        </>
        
    )
}

export default About
