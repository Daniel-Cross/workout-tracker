import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<div id="Navbar">
			<Link to="/">
				<h1 className="logo">5-3-1</h1>
			</Link>
			<ul className="links">
				<Link to="military">
					<li>Military Press</li>
				</Link>
				<Link to="squat">
					<li>Squat</li>
				</Link>
				<Link to="/bench">
					<li>Bench Press</li>
				</Link>
				<Link to="deadlift">
					<li>Deadlift</li>
				</Link>
			</ul>
		</div>
	);
};

export default Navbar;
