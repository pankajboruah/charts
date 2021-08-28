import React from "react";

import AreaChartContainer from "../../../../../../../../shared/AreaChartWidget";
import VerticalDivider from "../../../../../../../../shared/VerticalDivider";

import { users } from "../../../../../../../../../constants/users.json";

import "./index.scss";

const OtherCharts = () => {
	return (
		<div>
			<div className="otherCharts">
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>Users</div>
								<div style={{ fontSize: 18 }}>
									{users.reduce(
										(acc, cur) => (acc += cur.users),
										0
									)}
								</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>New Users</div>
								<div style={{ fontSize: 18 }}>14,517</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>Sessions</div>
								<div style={{ fontSize: 18 }}>18,013</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>
									Number of sessions per user
								</div>
								<div style={{ fontSize: 18 }}>1.22</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
			</div>
			<div className="otherCharts">
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>Pageviews</div>
								<div style={{ fontSize: 18 }}>22,134</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>
									Pages / Session
								</div>
								<div style={{ fontSize: 18 }}>1.23</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>
									Avg. Session Duration
								</div>
								<div style={{ fontSize: 18 }}>00:00:47</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
				<div className="otherCharts__chart">
					<AreaChartContainer
						data={users}
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
								<div style={{ fontSize: 12 }}>Bounce Rate</div>
								<div style={{ fontSize: 18 }}>87.16%</div>
							</div>
						}
					/>
					<VerticalDivider />
				</div>
			</div>
		</div>
	);
};

export default OtherCharts;
