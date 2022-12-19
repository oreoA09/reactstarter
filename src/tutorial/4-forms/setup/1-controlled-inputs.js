import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);
  const [isOnline, setIsOnline] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      
      const person = { id: new Date().getTime().toString(), firstName, email, isOnline };
      console.log(person);
      
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
      setIsOnline(false);

    } else {
      console.log('empty values');
    }
  };
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-controlTwo'>
            <label htmlFor='isOnline'>I'm Available : </label>
            <input
              type='checkbox'
              id='isOnline'
              name='isOnline'
              // checked={isOnline}
              onChange={(e) => e.target.checked ?setIsOnline(true): setIsOnline(false)}
            />
          </div>
          <button type='submit'>add person</button>
        </form>

        {people.map((person, index) => {
          const { id, firstName, email, isOnline } = person;
          // console.log(isOnline);
          return isOnline ?
           (
            <div className='item' key={id}>
              <p>❤️</p>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          ) : 
          (
            <div className='item' key={id}>
              <p>🔆</p>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          );
          
        })}
      </article>
    </>
  );
};

export default ControlledInputs;