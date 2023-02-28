import { FETCH_POSTS } from "./constants";

const intialState = {
    data: [],
    error: '',
    loading: true
}

const postsReducers = (state = intialState, action) => {

    switch (action.type) {
        case FETCH_POSTS:
            return {...state, data: action.payload}
        default:
            return state;
    }
}


export default postsReducers;