import React, { useState } from "react";

const MultipleInputs = () => {
  const [person, setPerson] = useState({ username: "", email: "", age: "" });
  const [people, setPeople] = useState([]);


const handleChange = (e) => {
  const name = e.target.name;
  const value = e.target.value;

  setPerson({ ...person, [name]: value });
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (person.username && person.email && person.age) {
    const newUser = { ...person, id: new Date().getTime().toString() };
    setPeople([...people, newUser]);
    setPerson({ username: "", email: "", age: "" });
  }
}
  return (
    <>
      <article className="form">
        <form>
          <div className="form-control">
            <label htmlFor="username">Username : </label>
            <input
              type="text"
              id="username"
              name="username"
              value={person.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email : </label>
            <input
              type="email"
              id="email"
              name="email"
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <label htmlFor="age">Age : </label>
            <input
              type="number"
              id="age"
              name="age"
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn" onClick={handleSubmit}>
            Add User
          </button>
        </form>
      </article>

      <article>
        <div>
          Key:
          <span style={{margin:'0px 20px'}}>UnderAge <div style={{backgroundColor:'#ffc0c0', width:20, height:20, display:"inline-flex"}}></div></span>

          <span>Adult <div style={{backgroundColor:'#c0ffc0', width:20, height:20, display:"inline-flex"}}></div></span>
        </div>
        {people.map((person) => {
          const { id, username, email, age } = person;
          return age<=18 ? (
            <div key={id} className="item" style={{backgroundColor:'#ffc0c0'}}>
              <h4>{username}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          ): (
            <div key={id} className="item" style={{backgroundColor:'#c0ffc0'}}>
              <h4>{username}</h4>
              <p>{email}</p>
              <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default MultipleInputs