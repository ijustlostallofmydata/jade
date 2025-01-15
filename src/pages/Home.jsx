import React from 'react';
import { useState } from 'react'
import '../App.css';
import kinematics from '../assets/kinematics.png'
import sun from '../assets/sun.png'
// import NavigationBar from './navbar';
// import { Routes, Route, HashRouter } from "react-router-dom";

function Home() {
  return (
      <>
        <h1 class = "text-4xl underline">
          This is a paragraph. You can type stuff you want to see here.
        </h1>
        <p id ="Paragraph">
          A student in the Fu Foundation School of Engineering and Applied Sciences (Columbia Engineering)
        </p>
        <p id = "Next">
          This is used for another paragraph. This is a link to the
          <a href= "https://en.wikipedia.org/wiki/Main_Page"> wiki </a>
        because why not.
      </p>
      <a href="https://github.com/" target="_blank">
        <img src={kinematics} alt="kinematics" width="100" height="100"/>
      </a>
      <br></br>
      <img src = {sun} alt = "sun" width = "100" height = "100"/>
    </>
    
  )
}

export default Home
