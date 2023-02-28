import * as constants from './constant'

const initialState = {
    name: 'malek',
    age: 25,
    favColor: 'blue'
}

const myReducer = (state = initialState, action) => {

    switch (action.type) {
        case constants.CHANGE_NAME:
            return { ...state, name: action.payload }
        default:
            return state
    }

}

export default myReducer;