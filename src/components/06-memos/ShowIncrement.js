import React from 'react';

const ShowIncrement = React.memo(({increment}) => {
  console.log('Generated again');

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});

export default ShowIncrement;
