import React, {useContext} from 'react'
import './logic.css'
import Context from '../Context'

function Logic(){
    const {click} = useContext(Context)
    return (
        <div className="buttons">
            <div className="row">
                <button onClick={() => click('C')} className="btn">C</button>
                <button onClick={() => click('back')} className="btn">←</button>
                <button onClick={() => click('=')} className="btn">=</button>
                <button onClick={() => click('/')} className="btn red">/</button>
            </div>

            <div className="row">
                <button onClick={() => click('7')} className="btn">7</button>
                <button onClick={() => click('8')} className="btn">8</button>
                <button onClick={() => click('9')} className="btn">9</button>
                <button onClick={() => click('*')} className="btn red">*</button>
            </div>

            <div className="row">
                <button onClick={() => click('4')} className="btn">4</button>
                <button onClick={() => click('5')} className="btn">5</button>
                <button onClick={() => click('6')} className="btn">6</button>
                <button onClick={() => click('-')} className="btn red">-</button>
            </div>

            <div className="row">
                <button onClick={() => click('1')} className="btn">1</button>
                <button onClick={() => click('2')} className="btn">2</button>
                <button onClick={() => click('3')} className="btn">3</button>
                <button onClick={() => click('+')} className="btn red">+</button>
            </div>

            <div className="row">
                <button onClick={() => click('0')} className="btn zero">0</button>
                <button onClick={() => click('.')} className="btn">.</button>
            </div>
        </div>
    )
}

export default Logic