import React, { useState } from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import TabPanel from "./components/TabPanel";
import "./index.scss";

const BottomNavigation = () => {
	const [tab, setTab] = useState(0);

	const onTabChange = (event, newValue) => {
		setTab(newValue);
	};

	return (
		<div className="bottomNavigation">
			<Tabs
				className="bottomNavigation__tabs"
				value={tab}
				onChange={onTabChange}
				aria-label="simple tabs example"
			>
				<Tab className="bottomNavigation__tab" label="Overview" />
			</Tabs>
			<TabPanel value={tab} index={0}>
				Overview
			</TabPanel>
		</div>
	);
};

export default BottomNavigation;
