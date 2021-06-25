import React, { useState, useRef, useEffect} from 'react'

function FlipCard({ card }) {
    const [height, setHeight] = useState()
    const fontRef = useRef()
    const backRef = useRef()
    const addHeight = () => {
      const fontHeight = fontRef.current.getBoundingClientRect().height
      const backHeight = backRef.current.getBoundingClientRect().height
        setHeight(Math.max(backHeight, fontHeight, 100))
    }
    const [flip, setFlip] = useState(false)
    const { question, answer, option } = card
useEffect(() => {
    addHeight()
},[answer, option, question])

useEffect(() => {
    window.addEventListener('resize', setHeight)

    return () => window.removeEventListener('resize', setHeight)
},[])
    return (
        <div 
            style={{height: height}}
        onClick={() => setFlip(!flip)}
        className={` card ${flip ? 'flip' : ''}`}>
            <div className='font' ref={fontRef}>
            <h2>{question}</h2>
            <div className='option'>{option.map((list) => <p key={list}>{list}</p>)}</div>
            </div>
            <div className='back' ref={backRef}>
                {answer}
            </div>
        </div>
    )
}

export default FlipCard
