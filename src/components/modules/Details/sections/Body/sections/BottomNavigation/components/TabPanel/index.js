import React, { useState, useEffect } from "react";

import AreaChartContainer from "../../../../../../../../shared/AreaChartWidget";
import Divider from "../../../../../../../../shared/Divider";
import PieChartWidget from "../../../../../../../../shared/PieChartWidget";

import Filters from "../Filters";
import OtherCharts from "../OtherCharts";

// import { users } from "../../../../../../../../../constants/users.json";

import "./index.scss";

const TabPanel = (props) => {
	const [userData, setUserData] = useState([]);
	const [occurence, setOccurence] = useState(0);
	const { children, value, index, ...other } = props;

	const getUserData = () => {
		const axios = require("axios");
		axios
			.get("http://localhost:4000/users")
			.then((res) => {
				setUserData(
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
	}, [occurence]);

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
					<Filters
						occurence={occurence}
						setOccurence={setOccurence}
					/>
					<AreaChartContainer
						data={userData}
						dataKeyX="date"
						dataKeyArea="users"
						showHorizontalGrid={true}
					/>
					<Divider />
					<div className={"tabpanel__charts"}>
						<OtherCharts />
						<PieChartWidget />
					</div>
				</div>
			)}
		</div>
	);
};

export default TabPanel;
