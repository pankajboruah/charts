import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const MenuItem = ({ icon, title }) => {
	return (
		<div className="menuitem__content">
			{icon}
			<div className="menuitem__content__title">{title}</div>
		</div>
	);
};

MenuItem.propTypes = {
	icon: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
};
export default MenuItem;
