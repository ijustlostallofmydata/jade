import React from 'react';
import './navbar.css'
import Fun from "./pages/Fun";
import Works from  './pages/Works'
import Home from './pages/Home'
import { Outlet, Link } from "react-router-dom";

function NavigationBar(){
    return(
        <>
			<nav>
				<h1 id= "name">
					William Chen
				</h1>
				<div>
					<ul id = "navbar">
						<li>	
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/Works">Works</Link>
						</li>
						<li>
							<Link to="/Fun">Fun</Link>
						</li>
					</ul>
				</div>
			</nav>
        </>
    )
}

export default NavigationBar