import React, { useEffect, useRef, useState } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const [list, setList] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    const newList = [...list, refContainer.current.value]

    setList(newList)
    refContainer.current.value = null
  };

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });

  return (
    <>
      <form className='form' onSubmit={handleSubmit}>
        <div>
          <h4>What are your plans for the day?</h4>
          <input type='text' ref={refContainer} />
        </div>
        <button type='submit'>submit</button>
      </form>
      
      <div>
        <h4><u>Your List:</u></h4>
        {list.map((item,index)=>{
        return <h3 key={index + 1}>{index+1}. {item}</h3>
      })}
      </div>
    </>
  );
};

export default UseRefBasics;
