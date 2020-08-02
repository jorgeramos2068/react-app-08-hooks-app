import React from 'react'

const Son = React.memo(({num, increment}) => {
  console.log('Generated again :(');

  return (
    <button
      className="btn btn-primary mr-3"
      onClick={() => increment(num)}
    >
      {num}
    </button>
  )
});

export default Son;
