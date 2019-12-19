### 1. Store in Index.js

1. Store, action, reducer, dispatch in *index.js*


```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';



import { createStore } from 'redux';



// Store -> Globlized state

// Action increment
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}


const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

// Reducer


const counter = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
    }
};

//store

let store = createStore(counter);

// display in console

store.subscribe(() => console.log(store.getState()));


// Dispatch  (to execute action)



store.dispatch(increment());


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```





---

# The whole procedure

---



1. **counterReducer** reducers/counter.js


```js
const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        default:
            return state;
    }
}



export default counterReducer;
```


2. **isLoggedReducer** reducers/isLogged.js



```js

const loggedReducer = (state = false, action) => {
    switch (action.type) {
        case 'SIGN_IN':
            return !state;
        default:
            return state;
    }
}



export default loggedReducer;

```


> **reducers/index.js**   is to combine reducers 

```js
import counterReducer from './counter';
import loggedReducer from './isLogged';


import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;


```




### Part two actions 


1. actions/index.js


```js
export const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

```




### Part 3 Creating store 


```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { createStore } from 'redux';
import allReducers from './reducers/index';

import { Provider } from 'react-redux';



const store = createStore(
    allReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

```




---

### Part 4  dispatch


---



```js
import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/index'

function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>{counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h4>valuable info </h4> : ''}
    </div>
  );
}

export default App;


```