import React from 'react'
import './Result.css'
import { connect } from 'react-redux'

const Result = (props) => {
    const getMonth = () => {
        const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря']
        return months[new Date().getMonth()]
    }
    const {day, time, month} = props

    return (
        <div className="result">
            <div className="result_info">
                <div>
                    <div className="result_title">Дата</div>
                    <div className="result_date">{day} {month ? month : getMonth()}</div>
                </div>
                <div className="vertical_strip"></div>
                <div>
                    <div className="result_title">Время</div>
                    <div className="result_time">{time}</div>
                </div>
            </div>
            <div className="button">
                <button>ЗАПИСАТЬСЯ НА БЕСПЛАТНУЮ ВСТРЕЧУ</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const {day, time, month} = state
    return {
        day, 
        time, 
        month
    }
}

export default connect(mapStateToProps)(Result)
