import React, {useState} from 'react'
import { connect } from 'react-redux'
import './Time.css'
import TimeItem from './TimeItem'
import {setTime} from '../../redux/actions'

const Time = (props) => {
    const [activeNumberTime, setActiveNumberTime] = useState(1)

    const handleTimeClick = (id) => {
        setActiveNumberTime(id)
    }
    return (
        <div className="time_container">
            <div className="title">Свободное время</div>
            <div className="slider">
                    {['18:00', '18:30', '20:00', '20:30', '21:30', '22:00'].map((item, index) => {
                        let activeClass = false
                        if (activeNumberTime === index) {
                            activeClass = true
                        } 
                        return (
                                <TimeItem 
                                  key={index}
                                  time={item}
                                  id={index}  
                                  active={activeClass}  
                                  handleTimeClick={handleTimeClick}
                                  setTime={props.setTime}
                                  />
                        )
                    })}
                </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTime: (date) => {
            return dispatch(setTime(date))
        }
    }
}

export default connect(null, mapDispatchToProps)(Time)
