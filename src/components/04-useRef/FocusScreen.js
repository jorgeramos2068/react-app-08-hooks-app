import React, {useRef} from 'react';
import '../02-useEffect/effects.css';

const FocusScreen = () => {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();;
  };

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input ref={inputRef} className="form-control" placeholder="Your name" />
      <button
        className="btn btn-outline-primary mt-3"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
