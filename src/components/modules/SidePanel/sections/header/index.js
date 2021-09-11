import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";

import ListItem from "../../../../shared/ListItem";

import "./index.scss";

const Header = () => {
	return (
		<div className="sidepanel__container">
			<ListItem icon={<HomeIcon />} title={"Home"} />
			<ListItem icon={<AppsIcon />} title={"Customisation"} />
		</div>
	);
};

export default Header;
