import PatternDividerDesktop from './assets/images/pattern-divider-desktop.svg'
import IconDice from './assets/images/icon-dice.svg'
import './Panel.css'
import { useState } from 'react'

function Panel() {
    const [adviceId, setAdviceId] = useState('222')
    const [advice, setAdvice] = useState('Everything in moderation!')

    async function fetchAdvice() {
        let response = await fetch('https://api.adviceslip.com/advice')
        let data = await response.json()
        setAdviceId(data.slip.id)
        setAdvice(data.slip.advice)
        localStorage.setItem('id', `${data.slip.id}`)
        localStorage.setItem('advice', `${data.slip.advice}`)
    }
    if(adviceId === '222' && advice === 'Everything in moderation!') {
        setAdviceId(localStorage.getItem('id'))
        setAdvice(localStorage.getItem('advice'))
    }

    return (
        <>
            <div className='panel'>
                <p className='adviceNumber'>ADVICE # {adviceId}</p>
                <h3 className='adviceBody'>{advice}</h3>
               
                <img className='patternDividerDesktop' src={PatternDividerDesktop} />
            </div>
            <div onClick={fetchAdvice} className='diceCircle'>
                <img className='iconDice' src={IconDice} />
            </div>
        </>
    )
}

export default Panel

