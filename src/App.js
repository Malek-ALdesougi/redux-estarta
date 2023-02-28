import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreator } from './reducers/myReducer/actions';
import { fetchDataAction } from './reducers/fetchDataReducer/actions';
import { getPosts } from './reducers/postsReducer/actions';
function App() {

  const dispatch = useDispatch()
  const basicInfo = useSelector(state => state.myReducer)
  const additionalInfo = useSelector(state => state.yourReducer)
  const fetchedData = useSelector(state => state.fetchDataReducer)
  const posts = useSelector(state => state.postsReducers)

console.log(fetchedData);
console.log(posts);
  // Another way to access sotre state 
  // const test = store.getState().yourReducer;
  // console.log(test);
  

  
  
  
  const handleChangeWeight = () => {
    dispatch(actionCreator())
  }
  // const unsubscribe = store.subscribe(() => console.log(store.getState().yourReducer))
  
  // unsubscribe();
  const handleChangeName = () => {
    dispatch({
      type: 'CHANGE_NAME',
      payload: 'Mohammed'
    })
  }

  return (
    <div className="App">
      <p>hi there</p>
      <button onClick={handleChangeName}>Change name</button>
      <button onClick={handleChangeWeight}>Change weight</button>
      <button onClick={() => dispatch(fetchDataAction())}>Fetch Data</button>
      <button onClick={() => dispatch(getPosts())}>Fetch Data</button>
      <hr></hr>
      <p>Name from reducer One : {basicInfo.name}</p>
      <p>Weight from reducer Two : {additionalInfo.weight}</p>

      <hr></hr>

      <h2>Users</h2>

      {fetchedData.data.map((user) => {
        return (
          <pre key={user.id}>{user.name}</pre>
        )
      })}


      <hr></hr>

      <h2>Posts</h2>

      {posts.data.map((post) => {
        return (
          <pre key={post.id}>{post.title}</pre>
        )
      })}

    </div>
  );
}

export default App;
