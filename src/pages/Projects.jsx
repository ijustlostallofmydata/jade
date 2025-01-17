import React from 'react';
import { useState } from 'react'
import '../App.css';
// import NavigationBar from './navbar';
// import { Routes, Route, HashRouter } from "react-router-dom";

function Projects() {
  return (
    <>
    <h1>A history of what I've built</h1>
    <p>
        I played with Legos and trains since I was four. By the end of elementary school, I have dabbled in Minecraft redstone. These toys made such an important impact on me.
    </p>
    <li>
        I have built projectile launchers from mechanical pencils! Thanks to 
        <a href= "https://www.youtube.com/@Slingshotchannel" target = "_blank"> Joerg Sprave </a>
         for the inspiration.
    </li>
    <li>	
        I have learned Lua and C# from using Roblox Studios and Unity, respectively, for game development.
    </li>
    <li>
        I have been building a computer algebra system capable of computing derivatives and x-intercepts of expressions.
    </li>
    <h1>
        Projectile Launcher
    </h1>
    <p>
        During a state-wide examination in seventh grade, I was left waiting by a desk with nothing but a rubber band and a few mechanical pencils.
        So I did what was natural with the two materials and started shooting the mechanical pencils from the rubber band.
        Next thing I knew, I was disassembling mechanical pencils left and right.
        I was looking for a way to more automatically launch pencil parts with just the pull of a trigger.
        As mentioned before, <a href= "https://www.youtube.com/@Slingshotchannel" target = "_blank"> Joerg Sprave </a> was a big inspiration at the time.
        The designs I conceived probably lied at the heart of engineering.
        Mangling mechanical pencil parts together to create something new and unique was the same process
        as melting rocks to create cars, buildings, tools, and other uses.
        Next thing I knew, my friends were talking about me selling my creations and working at Lockhead Martin.
        (I never sold my creation, but I did gift it to a friend as a birthday gift.)
        You may be curious what it looks like, but it might not be possible to show it for legal reasons.
    </p>
    <h1>
        Game development
    </h1>
    <p>
        If you want to know what I was like in middle school, just know that I was really into Roblox Studios, which required me to learn Lua.
        I would annoy my friends ad nauseam about it.
        None of my projects ever came to fruition, mainly because I kept on take on big projects.
        I would continue to use Roblox Studios until August as a rising high school sophomore, where I switched to Unity, which required me to learn C#.
        I followed similar patterns on the more complicated game engine.
        Once it was August again as a rising high school junior, I paused game development for the time being.
        I always loved the prospect of telling stories through video games.
        Maybe once I figure out how to make projects properly, I can achieve these ambitions once more!
    </p>
    <h1>
        Computer Algebra System
    </h1>
    <p>
        Shortly after I paused game development, I decided a simpler project would be to make a basic calculator, written in C#.
        But eventually, scope creep got the better of me as I wanted to do more and more with the calculator.
        At this rate it effectively became a computer algebra system.
        Currently it can simplify expressions, differentiate expressions (probably better than me),
        compute x-intercepts, and to an extent compute extrema of expressions.
        Next I plan to test the code I have written to compute the domain of the expression.
        It's become quite the labor of love! If only college wouldn't get in the way...
    </p>
    <p>
        Building this CAS taught me many niche but surprisingly useful mathematical concepts.
        If anyone wants to join in the FUN with building this CAS, it would be really helpful if they can do these assignments:
    </p>
    <li>
        How many factors does 10! have?
    </li>
    <li>	
        To multiply polynomials or big numbers, one would multiply individual terms/digits together and then sum these results to get the product.
        Is there a faster approach? (If so, code it. If not, explain why.)
    </li>
    <li>
        What is sin(arccos(2x)) equivalent to? What is sin(arccos(3x)) equivalent to? What is sin(arccos(nx)) equivalent to?
    </li>
    
    <p>Who knows what I'll build next? I have many ideas and the coming future looks bright!    </p>
    </>
  )
}

export default Projects
