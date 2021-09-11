import React, { useState } from "react";
import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import "./index.scss";

const useStyles = makeStyles((theme) => ({
	formControl: {
		margin: theme.spacing(1),
		marginLeft: 0,
		minWidth: 120,
	},
}));

const Filters = ({ occurence, setOccurence }) => {
	const [filter, setFilter] = useState(0);
	const classes = useStyles();

	const handleChange = (event) => {
		setFilter(event.target.value);
	};
	const handleOccurenceChange = (event, newValue) => {
		setOccurence(newValue);
	};
	return (
		<div className={"filters"}>
			<div className="filters__selector">
				<FormControl variant="outlined" className={classes.formControl}>
					<Select
						labelId="demo-simple-select-outlined-label"
						value={filter}
						onChange={handleChange}
					>
						<MenuItem value={0}>Users</MenuItem>
						<MenuItem value={1}>Learners</MenuItem>
						<MenuItem value={2}>Writers</MenuItem>
					</Select>
				</FormControl>
				<div style={{ margin: "0 10px" }}>VS</div>
				<div style={{ color: "#018EC7" }}>Select a metric</div>
			</div>
			<div className="filters__buttonGroup">
				<Tabs
					value={occurence}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleOccurenceChange}
				>
					<Tab label="Hourly" />
					<Tab label="Day" />
					<Tab label="Week" />
					<Tab label="Month" />
				</Tabs>
			</div>
		</div>
	);
};

Filters.propTypes = {
	occurence: PropTypes.number,
	setOccurence: PropTypes.func,
};

export default Filters;
