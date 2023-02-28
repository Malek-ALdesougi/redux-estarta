
const initialState = {
    hieght: 171,
    weight: 66
}

const yourReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'CHANGE_HEIGHT':
            return { ...state, hieght: action.payload }
        case 'CHANGE_WEIGHT':
            return { ...state, weight: action.payload }
        default:
            return state
    }

}


export default yourReducer;