import React from 'react';
import './App.css'
import NavigationBar from './navbar';
import { Routes, Route, HashRouter } from "react-router-dom";
import Fun from "./pages/Fun";
import Works from  './pages/Works'
import Home from './pages/Home'

function App() {
  return (
    <>
		<HashRouter>
			<div>
			<NavigationBar></NavigationBar>	
				<Routes>
					<Route path="/" element = {<Home/>}/>
					<Route path="/Home" element = {<Home/>}/>
					<Route path="/Works" element = {<Works/>}/>
					<Route path="/Fun" element = {<Fun/>}/>
     			</Routes>
			</div>
		</HashRouter>
		<div>
			<p>
				this will appear no matter what	
			</p>
		</div>
    </>
  )
}

export default App
