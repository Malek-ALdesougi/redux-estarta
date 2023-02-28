import { FETCH_POSTS } from "./constants"


export const getPosts = () => (dispatch) => {

    fetch('https://jsonplaceholder.typicode.com/posts')
        .then((resp) => resp.json())
        .then((data) => dispatch({
            type: FETCH_POSTS,
            payload: data
        }))


}

// export default getPosts;