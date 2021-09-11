import React from "react";
import PropTypes from "prop-types";

import {
	AreaChart,
	Area,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const AreaChartContainer = ({
	data,
	height = 100,
	width = 100,
	dataKeyX,
	dataKeyArea,
	showTooltip = true,
	showDots = true,
	showX = true,
	showY = true,
	showLegendIcon = true,
	showHorizontalGrid = false,
	showVerticalGrid = false,
	customLegend,
}) => {
	return (
		<ResponsiveContainer width={`${width}%`} height={`${height}%`}>
			<AreaChart
				width={500}
				height={400}
				data={data}
				margin={{
					top: 10,
					right: 30,
					left: 0,
					bottom: 0,
				}}
			>
				<CartesianGrid
					strokeDasharray="3 3"
					horizontal={showHorizontalGrid}
					vertical={showVerticalGrid}
				/>
				{showX && <XAxis dataKey={dataKeyX} />}
				{showY && <YAxis />}
				{showTooltip && <Tooltip />}
				{!!customLegend ? (
					<Legend content={customLegend} verticalAlign="top" />
				) : (
					<Legend
						verticalAlign="top"
						height={36}
						width={100}
						align="left"
						wrapperStyle={{
							marginLeft: showLegendIcon ? 50 : 0,
							textColor: "black",
						}}
						iconSize={showLegendIcon ? 14 : 0}
					/>
				)}
				<Area
					type="monotone"
					dataKey={dataKeyArea}
					stroke="#018EC7"
					fill="#E6F4F9"
					dot={
						showDots
							? { stroke: "#018EC7", fill: "#018EC7" }
							: false
					}
					legendType="circle"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

AreaChartContainer.propTypes = {
	data: PropTypes.array.isRequired,
	dataKeyX: PropTypes.string.isRequired,
	dataKeyArea: PropTypes.string.isRequired,
	height: PropTypes.number,
	width: PropTypes.number,
	showTooltip: PropTypes.bool,
	showDots: PropTypes.bool,
	showX: PropTypes.bool,
	showY: PropTypes.bool,
	showHorizontalGrid: PropTypes.bool,
	showVerticalGrid: PropTypes.bool,
};

export default AreaChartContainer;
