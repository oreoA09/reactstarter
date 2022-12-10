import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [user, setUser] = useState('Peter');
  const [loggedIn, setLoggedIn] = useState(false);
  const firstValue = user || 'hello guest';
  const secondValue = user && 'hello guest';

  return (
  <> 
  <h1>{firstValue}</h1>
      <h1>value : {secondValue}</h1>
  
  <button className='btn' onClick={()=>setLoggedIn(!loggedIn)}> Log IN/OUT
  </button>

{!loggedIn ? (<h2>{user} is in</h2>):(<h2>{user} is out</h2>)}

{!loggedIn && <p>Welcome back 😊</p>}

  </>
  )
};

export default ShortCircuit;
