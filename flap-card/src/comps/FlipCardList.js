import React from 'react'
import FlipCard from './FlipCard'
function FlipCardList({flipCard}) {
    
    return (
        <div className="card-grid">
            {
                flipCard.map((card) => {
                    return <FlipCard key={card.id} card={card}/>
                })
            }
        </div>
    )
}

export default FlipCardList
