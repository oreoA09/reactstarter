import React, { useState, useEffect } from 'react';
import { articles } from './data';
import { Link, useParams } from 'react-router-dom';

const Person = () => {
  const [title, setTitle] = useState('default title');
  const [imag, setImag] = useState('');
  const [desc, setDesc] = useState('');

  const { id } = useParams();

  useEffect(() => {
    const newPerson = articles.find((person) => person.id === parseInt(id));
    setTitle(newPerson.title);
    setImag(newPerson.imageUrl)
    setDesc(newPerson.desc)
  }, []);


  return (
    <div>
      <h2>{title}</h2>
      <img src={imag}/>
      <p>{desc}</p>
      <Link to='/entries' className='btn'>
        Back To People
      </Link>
    </div>
  );
};

export default Person;
