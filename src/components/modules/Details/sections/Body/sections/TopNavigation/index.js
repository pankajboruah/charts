import React, { useState } from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Segment from "./components/Segment";

import "./index.scss";

const TopNavigation = () => {
	const [date, setDate] = useState(0);

	const onDateChange = (date) => {
		setDate(date);
	};
	return (
		<div className="TopNavigation">
			<div style={{ display: "flex", width: "100%" }}>
				<Segment title="All Users" subtitle="100.00% Users" />
				<Segment title="All Users" subtitle="100.00% Users" />
			</div>
			<div className="TopNavigation__date">
				<Select
					labelId="demo-simple-select-label"
					value={date}
					onChange={(e) => onDateChange(e.target.value)}
				>
					<MenuItem value={0}>Apr 2, 2017 - Nov 30, 2017</MenuItem>
					<MenuItem value={1}>Apr 2, 2018 - Nov 30, 2018</MenuItem>
					<MenuItem value={2}>Apr 2, 2019 - Nov 30, 2019</MenuItem>
				</Select>
			</div>
		</div>
	);
};

export default TopNavigation;
