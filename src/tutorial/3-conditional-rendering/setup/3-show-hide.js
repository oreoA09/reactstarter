import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      <button className='btn' onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener('resize', checkSize);
    return () => {
      window.removeEventListener('resize', checkSize);
    };
  }, []);

  return (
    <div style={{marginTop: '2rem'}}>
      <h1>Window</h1>
      <h2>size : {width} <small>x</small> {height}</h2>
    </div>
  );
};

export default ShowHide;
