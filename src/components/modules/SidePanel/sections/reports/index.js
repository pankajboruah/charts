import React from "react";

import ScheduleIcon from "@material-ui/icons/Schedule";
import PersonIcon from "@material-ui/icons/Person";
import ListItem from "../../../../shared/ListItem";

import "./index.scss";

const Reports = () => {
	return (
		<div className="sidepanel__reports__container">
			<div className="sidepanel__reports__header">REPORTS</div>
			<ListItem icon={<ScheduleIcon />} title="Real-Time" />
			<ListItem icon={<PersonIcon />} title="Audience" />
		</div>
	);
};

export default Reports;
