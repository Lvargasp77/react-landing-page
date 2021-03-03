import React from "react";

import { Navbar } from "./component/navbar.js";
import { Jumbotron } from "./component/jumbotron.js";
import { Cards } from "./component/cards.js";

const carta = {
	image: "/workspace/react/-hello/src/img/rigo-baby.jpg",
	alt: "rigo",
	title: "Hello Rigo",
	description: "loesk ksksksksksks",
	url: "http://wikipedia.com",
	button: "click here"
};

//create layout
export function App(carta) {
	return (
		<div className="text-center">
			<Navbar />

			<div className="container">
				<Jumbotron />
				<Cards card={carta} />
			</div>
		</div>
	);
}
