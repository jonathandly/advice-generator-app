import PatternDividerDesktop from './assets/images/pattern-divider-desktop.svg'
import IconDice from './assets/images/icon-dice.svg'
import './Panel.css'
import { useState } from 'react'

function Panel() {
    const [advice, setAdvice] = useState('')
    const [adviceId, setAdviceId] = useState('')

    async function fetchAdvice() {
        let response = await fetch('https://api.adviceslip.com/advice')
        let data = await response.json()
        // console.log(data.slip.advice)
        setAdviceId(data.slip.id)
        setAdvice(data.slip.advice)
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

