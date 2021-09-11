import React from "react";

// import AreaChartContainer from "../../../../../../../../shared/AreaChartWidget";
// import VerticalDivider from "../../../../../../../../shared/VerticalDivider";
import ChartComponent from "./ChartComponent";
// import { users } from "../../../../../../../../../constants/users.json";

import "./index.scss";

const OtherCharts = () => {
	return (
		<div className="otherCharts__container">
			<div className="otherCharts__section">
				<div className="otherCharts__section__charts">
					<ChartComponent title={"New Users"} />
					<ChartComponent title={"Users"} />
				</div>
				<div className="otherCharts__section__charts">
					<ChartComponent title={"Sessions"} />
					<ChartComponent title={"Number of sessions per user"} />
				</div>
			</div>
			<div className="otherCharts__section">
				<div className="otherCharts__section__charts">
					<ChartComponent title={"Avg. Session Duration"} />
					<ChartComponent title={"Pageviews"} />
				</div>

				<div className="otherCharts__section__charts">
					<ChartComponent title={"Pages / Session"} />
					<ChartComponent title={"Bounce Rate"} />
				</div>
			</div>
		</div>
	);
};

export default OtherCharts;
