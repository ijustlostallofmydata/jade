import React from 'react';
import './navbar.css'
import { Outlet, Link } from "react-router-dom";

function NavigationBar(){
    return(
        <>
			<nav>
				<div>
					<ul id = "navbar">
						<li>	
							<button>
								<Link to="/">Home</Link>
							</button>
						</li>
						<li>
							<button>
								<Link to="/Bio">Bio</Link>
							</button>
						</li>
						<li>
							<button>
								<Link to="/Fun">Fun</Link>
							</button>
						</li>
						<li>
							<button>
								<Link to="/Projects">Projects</Link>
							</button>
						</li>
						<li>
							<button>
								<Link to="/Visuals">Visuals</Link>
							</button>
						</li>
					</ul>
				</div>
			</nav>
        </>
    )
}

export default NavigationBar