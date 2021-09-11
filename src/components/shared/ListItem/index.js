import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

const ListItem = ({ icon, title }) => {
	return (
		<div className="listitem__content">
			{icon}
			<div className="listitem__content__title">{title}</div>
		</div>
	);
};

ListItem.propTypes = {
	icon: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
};

export default ListItem;
