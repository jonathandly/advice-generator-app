import PatternDividerDesktop from './assets/images/pattern-divider-desktop.svg'
import IconDice from './assets/images/icon-dice.svg'
import './Panel.css'

function Panel() {

    return (
        <>
            <div className='panel'>
                <p className='adviceNumber'>Advice</p>
                <h3 className='adviceBody'>Body</h3>
                <img className='patternDividerDesktop' src={PatternDividerDesktop} />
            </div>
            <div className='diceCircle'>
                <img className='iconDice' src={IconDice} />
            </div>
        </>
    )
}

export default Panel

