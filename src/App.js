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
