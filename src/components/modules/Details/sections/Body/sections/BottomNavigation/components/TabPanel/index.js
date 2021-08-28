import React from "react";

import AreaChartContainer from "../../../../../../../../shared/AreaChartWidget";
import Divider from "../../../../../../../../shared/Divider";
import PieChartWidget from "../../../../../../../../shared/PieChartWidget";

import Filters from "../Filters";
import OtherCharts from "../OtherCharts";

import { users } from "../../../../../../../../../constants/users.json";

import "./index.scss";

const TabPanel = (props) => {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<div className="tabpanel">
					<Filters />
					<AreaChartContainer
						data={users}
						dataKeyX="date"
						dataKeyArea="users"
						showHorizontalGrid={true}
					/>
					<Divider />
					<div style={{ display: "flex", marginTop: 20 }}>
						<OtherCharts />
						<PieChartWidget />
					</div>
				</div>
			)}
		</div>
	);
};

export default TabPanel;
