import React from "react";

//const card = {
//image: "/workspace/react/-hello/src/img/rigo-baby.jpg",
//alt: "rigo",
//title: "Hello Rigo",
//description: "loesk ksksksksksks",
//url: "http://wikipedia.com",
//button: "click here"
//};

//Cards
export function Cards(card) {
	return (
		<div className="col">
			<div className="card" style="width: 18rem;">
				<img src={image} className="card-img-top" src="..." alt="..." />
				<div className="card-body">
					<h5 className="card-title">{title}</h5>
					<p className="card-text">{description}</p>
					<a href={url} className="btn btn-primary">
						{button}
					</a>
				</div>
			</div>
		</div>
	);
}
