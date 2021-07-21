export const setDay = (day) => {
    return {
        type: 'SET_DAY',
        payload: day
    }
}

export const setTime = (time) => {
    return {
        type: 'SET_TIME',
        payload: time
    }
}

const convertNumberToMonth = (monthNumber) => {
    const months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа',
        'Сентября', 'Октября', 'Ноября ', 'Декабря']
    return months[+monthNumber - 1]
}

export const setMonth = (month) => {
    console.log(month);
    return {
        type: 'SET_MONTH',
        payload: convertNumberToMonth(month)
    }
}