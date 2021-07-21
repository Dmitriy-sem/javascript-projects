import React from 'react'
import './Person.css'
import photo from './man.png' 

const Person = () => {
    return (
        <>
            <div className="name">Алексей Карачинский</div>
            <div className="additional_info">
                <div>
                    <img className="photo" src={photo} alt="" />
                </div>
                <div className="info">
                    <div className="duration">Длительность консультации</div><br />
                    <div className="time_duration">50 минут</div>
                </div>
            </div>
        </>
    )
}

export default Person
