import { FETCH_DATA } from "./constants";

export function fetchDataAction() {

    return function malek(dispatch, subscribe, getState){

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then(data => dispatch({
                type: FETCH_DATA,
                payload: data
            }));
    }
}
