import React from 'react';
import { useState } from 'react'
import '../App.css';
import sun from '../assets/sun.png'
import electrostatics from '../assets/electrostatics.png'
import gravity from '../assets/gravity.png'
import kinematics from '../assets/kinematics.png'
import momentum from '../assets/momentum.png'
import newton from '../assets/newton.png'
import oscillations from '../assets/oscillations.png'
import rotation from '../assets/rotation.png'
import work from '../assets/work.png'

function Visuals() {
  return (
    <>
    <h1>Miscellaneous images</h1>
    <p>
        Drawn by me. I suck at drawing, but GRAPHIC DESIGN IS MY PASSION. I have to fill up this website anyway. Sorry performance!
    </p>
    <img src = {sun} alt = "sun" width = "200" height = "200"/>
    <img src = {electrostatics} alt = "kinematics" width = "200" height = "200"/>
    <img src = {gravity} alt = "kinematics" width = "200" height = "200"/>
    <img src = {kinematics} alt = "kinematics" width = "200" height = "200"/>
    <img src = {momentum} alt = "kinematics" width = "200" height = "200"/>
    <img src = {newton} alt = "kinematics" width = "200" height = "200"/>
    <img src = {oscillations} alt = "kinematics" width = "200" height = "200"/>
    <img src = {rotation} alt = "kinematics" width = "200" height = "200"/>
    <img src = {work} alt = "kinematics" width = "200" height = "200"/>
    <p>Bonus points if you can guess what each icon stands for (except maybe the first one). I have more on my old laptop :(</p>
    <p>
      I'm a little more creatively inclined that I would like to admit.
      I always wanted to draw, but never found enough time or determination to start something new and poorly.
      I like to listen to and compose (bad) music.
      At one point I actually did have some samples of the bad tunes I made, but I seem to have lost them on the computers I have on campus.
      Bless your ears!
      I have learned to play the violin (badly) since third grade.
      I would like to learn more instruments.
      </p>
    </>
  )
}

export default Visuals
