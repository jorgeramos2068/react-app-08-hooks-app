import React from 'react';

const Small = React.memo(({value}) => {
  return (
  <small>{value}</small>
  );
})

export default Small;
