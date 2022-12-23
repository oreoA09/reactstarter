import React, { useState } from 'react';
import { articles } from './data';
import { Link } from 'react-router-dom';

const People = () => {
  const [people, setPeople] = useState(articles);
  // const result = articles;
  // setPeople(result)

  return (
    <div>
      <h2>My Entries</h2>
      {people.map((person) => {
        return (
          <div key={person.id} className='item' style={{width: '30vw', display:'inline-flex'}}>
            <div style={{display: 'block'}}>
            <img src={person.imageUrl} style={{width: '30vw'}}/>
            <h4>{person.title}</h4>
            
            <Link to={`/entry/${person.id}`} className='btn'>Read</Link>
            </div>

          </div>
        );
      })}
    </div>
  );
};

export default People;
