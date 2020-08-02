import React, {useState, useMemo} from 'react';
import useCounter from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

const MemoHook = () => {
  const {counter, increment} = useCounter(5000);
  const [show, setShow] = useState(true);

  const hardProcess = (times) => {
    for (let i = 0; i < times; i++) {
      console.log('Here we go!');
    }
    return `${times} completed`;
  };

  const hardProcessMemo = useMemo(() => hardProcess(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h2>Counter: <small>{counter}</small></h2>
      <hr />
      <p>{hardProcessMemo}</p>
      <button
        className="btn btn-primary"
        onClick={() => { increment(1) }}
      >
        +1
      </button>
      <button
        className="btn btn-outline-primary ml-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
