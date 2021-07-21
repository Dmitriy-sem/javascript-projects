import React, {useState} from 'react'
import './App.css'
import Display from '../display/display.js'
import Logic from '../logic/logic.js'
import Context from '../Context'

function App() {
	const [info, setInfo] = useState('')

	function click(id) {
		const takenInfo = info
		switch (id) {
			case 'C':
				setInfo('')
				break
			case 'back':
				const res = takenInfo.substring(0, info.length - 1)
				setInfo(res)
				break
			case '=':
				try {
					const finalResult = takenInfo + ' = ' + Math.trunc(eval(takenInfo)* 100) / 100
					setInfo(finalResult)
				} catch (error) {
					setInfo('Error')
				}
		
				
				break
			default:
				setInfo(takenInfo + id)
				break
		}
		
	}
	return ( 
		<Context.Provider value={{getValue:info, click: click}}>
			<div className ="container">
				<Display /> 
				<Logic />
			</div>
		</Context.Provider>
	)
}

export default App