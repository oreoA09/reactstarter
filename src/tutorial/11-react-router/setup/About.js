import React from "react";
import aboutHero from './journalAbout.png'

const About = () => {
  return (
    <div style={{display: 'inline-flex', gap:'15px'}}>
      <div style={{width: '40vw'}}>
        <h4>Intro:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        </p>
        <h4>Background:</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <h4>Hobbies:</h4>
        <ul>
          <li>Lorem ipsum dolor sit amet, </li>
          <li>consectetur adipiscing elit, sed do </li>
          <li>eiusmod tempor incididunt ut labore et dolore magna </li>
          <li>aliqua. Ut enim ad
          minim veniam, quis nostrud </li>
        </ul>
      </div>
      <img src={aboutHero} style={{width: '40vw'}}/>
    </div>
  );
};

export default About;
