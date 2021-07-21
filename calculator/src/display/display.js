import React, {useContext} from 'react'
import './display.css'
import Context from '../Context'

function Display() {
    const {getValue} = useContext(Context)
    return (
        <input defaultValue={getValue} className="input" type="text"/>
    )
}

export default Display