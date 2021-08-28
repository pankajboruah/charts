import React from "react";
import TopNavigation from "./sections/TopNavigation";
import BottomNavigation from "./sections/BottomNavigation";

const Body = () => {
	return (
		<div className="details__body">
			<TopNavigation />
			<BottomNavigation />
		</div>
	);
};

export default Body;
