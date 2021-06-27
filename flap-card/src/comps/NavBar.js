import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  
    return (
        <div className='nav-container'>
            <header>
                <div className='logo'>
                    <h1>😄fun-quiz-questions❓</h1>
                </div>
                <nav>
                <li><Link to='/'>Home</Link></li>
                 <li><Link to='/About'>About</Link></li>
                </nav>
            </header>
            <div className='header'>
                <h1>😄Fun General Question&Answer🥰</h1>
                <hr className='underline'/>
            </div>
        </div>
    )
}

export default NavBar
