import { FETCH_DATA } from "./constants"

const intitialState = {
    data: [],
    error: '',
    loading: true
}

function fetchDataReducer(state = intitialState, action) {

    switch (action.type) {
        case FETCH_DATA: {
            return { ...state, data: action.payload }
        }
        default:
            return state


    }

} 

export default fetchDataReducer;