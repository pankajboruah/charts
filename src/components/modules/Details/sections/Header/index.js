import React from "react";
import SaveIcon from "@material-ui/icons/Save";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ShareIcon from "@material-ui/icons/Share";
import CachedIcon from "@material-ui/icons/Cached";

import VerticalDivider from "../../../../shared/VerticalDivider";
import "./index.scss";

const Header = () => {
	return (
		<div className="details__header">
			<div>Audience Overview</div>
			<div className="actions">
				<div className="icon">
					<SaveIcon fontSize="small" />
					<div>SAVE</div>
				</div>
				<div className="icon">
					<SaveAltIcon fontSize="small" />
					<div>EXPORT</div>
				</div>
				<div className="icon">
					<ShareIcon fontSize="small" />
					<div>SHARE</div>
				</div>
				<VerticalDivider />
				<div className="icon">
					<CachedIcon fontSize="small" />
					<div>INSIGHT</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
