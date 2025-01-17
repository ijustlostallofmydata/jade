import React from 'react';
import './App.css'
import NavigationBar from './navbar';
import { Routes, Route, HashRouter } from "react-router-dom";
import Bio from  './pages/Bio'
import Fun from "./pages/Fun";
import Home from './pages/Home'
import Projects from './pages/Projects'
import Visuals from './pages/Visuals'
import kinematics from './assets/kinematics.png'

function App() {
  return (
    <>
		<a href="/" ><h1 id= "name">
			William Chen
		</h1></a>
		
		<HashRouter>
			<div>
			<NavigationBar></NavigationBar>	
				<Routes>
					<Route path="/" element = {<Home/>}/>
					<Route path="/Home" element = {<Home/>}/>
					<Route path="/Bio" element = {<Bio/>}/>
					<Route path="/Fun" element = {<Fun/>}/>
					<Route path="/Projects" element = {<Projects/>}/>
					<Route path="/Visuals" element = {<Visuals/>}/>
     			</Routes>
			</div>
		</HashRouter>
		<div>
			<p>
				A Placeholder image for my github.
			</p>
			<a href="https://github.com/" target="_blank">
			<img src={kinematics} alt="kinematics" width="100" height="100"/>
		</a>
		</div>
    </>
  )
}

export default App
