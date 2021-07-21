import React, { useState } from 'react'
import './Date.css'
import DateItem from './DateItem'
import { connect } from 'react-redux'
import {setDay, setMonth} from '../../redux/actions'

const DateComponent = (props) => {
    const [calendarState, setCalendarState] = useState(false)
    const [activeNumber, setActiveNumber] = useState(0)

    const getWeekDay = (number) => {
        const days = ['Вс','Пн','Вт','Ср','Чт', 'Пт', 'Сб',]
        const newDate = new Date(), 
              day = newDate.getDay() + number

        return {
            dayOfWeek: number === 0 ? 'Сегодня' : days[new Date(2010, 0, 1+number).getDay()],
            dayNumber: day < 10 ? `0${day}` : day
        }
    }

    const handleDateClick = (id) => {
        setActiveNumber(id)
    }

    const setDateFromCalendar = (e) => {
        const data = e.target.value.split('-')
        props.setDay(data[2])
        props.setMonth(data[1])
    }

    return (
        <>
            <div className="choosing">
                <div className="title">Возможная дата</div>
                <div className="switchers">
                    <i className={`fas fa-grip-horizontal ${!calendarState ? 'active_icon' : ''}`} onClick={() => setCalendarState(false)}></i>
                    <i className={`far fa-calendar-alt ${calendarState ? 'active_icon' : ''}`} onClick={() => setCalendarState(true)}></i>
                </div>
            </div>
            {calendarState && <input type="date" onChange={setDateFromCalendar}/>}
            
            {!calendarState &&
                <div className="slider">
                    {[null, null, null, null, null, null].map((item, index) => {
                        const resFunc = getWeekDay(index)
                        let activeClass = false
                        if (activeNumber === index) {
                            activeClass = true
                        } 
                        return (
                                <DateItem 
                                  key={resFunc.dayNumber} 
                                  dayOfWeek={resFunc.dayOfWeek} 
                                  dayNumber={resFunc.dayNumber} 
                                  handleDateClick={handleDateClick} 
                                  active={activeClass}
                                  id={index}    
                                  setDate={props.setDay}
                                  />
                        )
                    })}
                </div>
            }
        </>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setDay: (date) => {
            return dispatch(setDay(date))
        },

        setMonth: (month) => {
            return dispatch(setMonth(month))
        }
    }
}


export default connect(null, mapDispatchToProps)(DateComponent)
