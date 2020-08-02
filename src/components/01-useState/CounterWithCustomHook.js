import React from 'react';
import useCounter from '../../hooks/useCounter';
import './counter.css';

const CounterWithCustomHook = () => {
  const {state, increment, decrement, reset} = useCounter();

  return (
    <>
      <h1>Counter with custom hook: {state}</h1>
      <hr />
      <button className="btn btn-success" onClick={() => increment(2)}>+1</button>&nbsp;
      <button className="btn btn-success" onClick={reset}>Reset</button>&nbsp;
      <button className="btn btn-success" onClick={() => decrement(2)}>-1</button>
    </>
  );
};

export default CounterWithCustomHook;
