import "./Navbar.scss";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./NavbarLogo.svg";
import { Component } from "react";

export default class Navbar extends Component {
	render() {
		return (
			<div className='navbar'>
				<NavLink className={({ isActive }) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/">
				<Logo className="navbar__logo"></Logo>
				</NavLink>
				
				<nav className="navbar__nav">
					<NavLink className={({ isActive }) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/">Accueil</NavLink>
					<NavLink className={({ isActive }) => (isActive ? "navbar__nav__link active" : "navbar__nav__link")} to="/about">A propos</NavLink>
				</nav>
			</div>
		);
	}
}
