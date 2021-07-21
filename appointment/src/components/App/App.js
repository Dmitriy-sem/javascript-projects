import React from 'react'
import { connect } from 'react-redux'
import {setDay, setTime} from '../../redux/actions'
import './App.css'
import Person from '../Person/Person'
import DateComponent from '../Date/Date'
import Time from '../Time/Time'
import Result from '../Result/Result'


const App = ({test}) => {
	
  	return (
		<div className="container">
			<Person />
			<DateComponent />
			<Time />
			<Result />
		</div>
  	)
}

const mapStateToProps = ({test}) => {
  	return {
      	test
  	}
}


export default connect(mapStateToProps, {setDay, setTime})(App)
