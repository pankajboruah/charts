import React from "react";
import Search from "../../shared/search/index.js";
import Header from "./sections/header/index.js";
import Reports from "./sections/reports/index.js";
import Divider from "../../shared/Divider";

import "./index.scss";

const SidePanel = () => {
	return (
		<div className="sidepanel">
			<Search />
			<Divider />
			<Header />
			<Divider />
			<Reports />
		</div>
	);
};

export default SidePanel;
