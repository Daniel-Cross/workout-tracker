import React from 'react';
import '../styles/navbar.css';

const Navbar = () => {
	return (
		<div id="Navbar">
			<h1 className="logo">5-3-1</h1>
			<ul className="links">
				<a href="#">
					<li>Military Press</li>
				</a>
				<a href="#">
					<li>Squat</li>
				</a>
				<a href="#">
					<li>Bench Press</li>
				</a>
				<a href="#">
					<li>Deadlift</li>
				</a>
			</ul>
		</div>
	);
};

export default Navbar;
