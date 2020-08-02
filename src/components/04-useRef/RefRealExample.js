import React, {useState, useRef} from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

const RefRealExample = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>RefRealExample</h1>
      <hr />
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide
      </button>
      { show && <MultipleCustomHooks /> }
    </div>
  );
};

export default RefRealExample;
