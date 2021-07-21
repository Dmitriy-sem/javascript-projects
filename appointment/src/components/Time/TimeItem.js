import React from 'react'

const TimeItem = (props) => {
    const {active, time, handleTimeClick, id, setTime} = props

    const multiHandleTimeClick = () => {
        handleTimeClick(id)
        setTime(time)
    }

    return (
        <div className={`timer_item ${active ? 'active' : ''}`}  onClick={multiHandleTimeClick}>
            {time}
        </div>
    )
}

export default TimeItem
