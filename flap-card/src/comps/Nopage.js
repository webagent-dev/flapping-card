import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'

function Nopage() {
    useEffect(() => {
      document.title = 'Flap-Card/NoPage'
      
  },[])
    return (
        <div>
            <h1 style={{textAlign: 'center',color:'red',fontSize:'30px',padding:'5px'}}>You are In A Wrong Place</h1>
            <button className="btn"><Link to='/'>BACK-Home</Link></button>
        </div>
    )
}

export default Nopage
