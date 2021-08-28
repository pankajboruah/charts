import React from "react";
import PropTypes from "prop-types";

import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";

import "./index.scss";

const Segment = ({ title, subtitle }) => {
	return (
		<div className="segment">
			<div className="segment__icon">
				<RadioButtonUncheckedIcon fontSize="large" color="primary" />
			</div>
			<div className="segment__content">
				<div className="segment__content__title">{title}</div>
				<div className="segment__content__subtitle">{subtitle}</div>
			</div>
		</div>
	);
};

Segment.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
};

export default Segment;
