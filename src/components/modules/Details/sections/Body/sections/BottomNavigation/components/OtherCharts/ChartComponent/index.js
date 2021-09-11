import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import AreaChartContainer from "../../../../../../../../../shared/AreaChartWidget";
import VerticalDivider from "../../../../../../../../../shared/VerticalDivider";

// import { users } from "../../../../../../../../../../constants/users.json";

import "./index.scss";

const ChartComponent = ({ title }) => {
	const [data, setData] = useState([]);

	const getUserData = () => {
		const axios = require("axios");
		axios
			.get("http://localhost:4000/users")
			.then((res) => {
				setData(
					res.data.map((el) => ({
						...el,
						users: (el.users = Math.floor(
							Math.random() * (1000 - 100) + 100
						)),
					}))
				);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		getUserData();
	}, []);

	return (
		<div className="otherCharts__chart">
			<AreaChartContainer
				data={data}
				height={90}
				dataKeyX="date"
				dataKeyArea="users"
				showTooltip={false}
				showDots={false}
				showX={false}
				showY={false}
				showLegendIcon={false}
				customLegend={
					<div
						style={{
							display: "flex",
							color: "black",
							flexDirection: "column",
							alignItems: "start",
						}}
					>
						<div style={{ fontSize: 12 }}>{title}</div>
						<div style={{ fontSize: 18 }}>
							{data.reduce((acc, cur) => (acc += cur.users), 0)}
						</div>
					</div>
				}
			/>
			<VerticalDivider />
		</div>
	);
};

ChartComponent.propTypes = {
	title: PropTypes.string,
};

export default ChartComponent;
