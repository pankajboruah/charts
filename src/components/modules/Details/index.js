import React from "react";

import Header from "./sections/Header";
import Body from "./sections/Body";

import Divider from "../../shared/Divider";

import "./index.scss";

const Details = () => {
	return (
		<div className="details">
			<Header />
			<Divider />
			<Body />
		</div>
	);
};

export default Details;
