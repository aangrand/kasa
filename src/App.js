import "./App.css";
import "./Containers/Home/Home.scss";
import { Component } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./Containers/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Containers/Home/Home";
import Error from "./Containers/Errors/Error";
import Rental from "./Containers/Rental/Rental";
import Footer from "./Components/Footer/Footer";

export default class App extends Component {
	render() {
		return (
			<>
				<Navbar className="homepage"></Navbar>
				<Routes>
					<Route path="*" element={<Error />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/rental/:id" element={<Rental />}></Route>
					<Route path="/" element={<Home />}></Route>
				</Routes>
				<Footer className="footer" />
			</>
		);
	}
}
