import React, {useState, useEffect} from 'react';

const Message = () => {
  const [coords, setCoords] = useState({x: 0, y: 0});
  const {x, y} = coords;

  useEffect(() => {
    const mouseMove = (e) => {
      const localCoords = {x: e.x, y: e.y};
      setCoords(localCoords);
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <div>
      <h3>My message</h3>
      <p>X: {x} Y: {y}</p>
    </div>
  );
};

export default Message;
