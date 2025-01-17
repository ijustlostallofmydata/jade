import React from 'react';
import { useState } from 'react'
import '../App.css';
import map from '../assets/map.jpg'
// import NavigationBar from './navbar';
// import { Routes, Route, HashRouter } from "react-router-dom";

function Bio() {
  return (
    <>
      <h1>Native New Yorker</h1>
      <a href='https://billwurtz.com/bio.html' target="_blank"><button type = "button">a summary</button></a>
      <p>
          I have lived in Brooklyn for all my life, unlike most of my classmates.
          Although I frequented lower Manhattan for school and work for most of my life as well.
          I graduated from Midwood High School in June 2024.  
          For reference, it's by Brooklyn College, which is at the last stop for the 2 and 5 train.
      </p>
      <img src = {map} alt = "map of nyc" width = "500" height = "500"/>
      <p>
        I disliked my high school experience there.
      </p>
      <p>
        I don't know how I got this far.
        Who's to say I can continue?
      </p>
      <p>
        Sometimes I work out, only to maintain fitness.
        If you really want someone more athletic who is related to me, look at my cousins.
        In fact, here is a <a href= "https://apexforyouth.org/" target="_blank"> website </a> with a photo of my cousin!
        I won't tell who.
      </p>
    </>
  )
}

export default Bio
