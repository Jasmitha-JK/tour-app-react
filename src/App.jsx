import "./App.css";
import Header from "./Components/Header";
import { useState } from "react";
import Home from "./Components/Home";
import CardContainer from "./Components/CardContainer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import data from "./database/data";
import Card from "./Components/Card";
function App() {
	return (
		<div className="App">
			<Header />
			<Home />
			<CardContainer data={data} />
			<ToastContainer position="top-right" />
		</div>
	);
}

export default App;
