import React from "react";

import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";

import MenuItem from "../../../../shared/MenuItem";
import "./index.scss";

const Header = () => {
	return (
		<div className="sidepanel__container">
			<MenuItem icon={<HomeIcon />} title={"Home"} />
			<MenuItem icon={<AppsIcon />} title={"Customisation"} />
		</div>
	);
};

export default Header;
