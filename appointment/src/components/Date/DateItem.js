import React from 'react'

const DateItem = (props) => {
    const {dayOfWeek, dayNumber, handleDateClick, active, id, setDate} = props
    const multiHandleDateClick = () => {
        handleDateClick(id)
        setDate(dayNumber)
    }
    return (
        <div className={`slider_item ${active ? 'active' : ''}`}  onClick={multiHandleDateClick}>
            <div className="day">{dayOfWeek}</div>
            <div className="day_number">{dayNumber}</div>
        </div>
    )
}

export default DateItem
