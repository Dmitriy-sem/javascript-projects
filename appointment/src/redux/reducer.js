const today = new Date().getDay()

const initialState = {
    day: today < 10 ? `0${today}` : today,
    time: '18:30',
    month: null
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case 'SET_DAY':
            return {
                ...state,
                day: action.payload
            }
        case 'SET_TIME':
            return {
                ...state,
                time: action.payload
            }
        case 'SET_MONTH':
            return {
                ...state,
                month: action.payload
            }
        default:
            return state
    }
}

export default reducer