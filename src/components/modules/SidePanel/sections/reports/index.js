import React from "react";

import ScheduleIcon from "@material-ui/icons/Schedule";
import PersonIcon from "@material-ui/icons/Person";
import MenuItem from "../../../../shared/MenuItem";

import "./index.scss";

const Reports = () => {
	return (
		<div className="sidepanel__reports__container">
			<div className="sidepanel__reports__header">REPORTS</div>
			<MenuItem icon={<ScheduleIcon />} title="Real-Time" />
			<MenuItem icon={<PersonIcon />} title="Audience" />
		</div>
	);
};

export default Reports;
