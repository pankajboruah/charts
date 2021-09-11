import React, { useState } from "react";
import SaveIcon from "@material-ui/icons/Save";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import ShareIcon from "@material-ui/icons/Share";
import CachedIcon from "@material-ui/icons/Cached";

import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import ScheduleIcon from "@material-ui/icons/Schedule";
import PersonIcon from "@material-ui/icons/Person";

import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

import ListItem from "../../../../shared/ListItem";
import Search from "../../../../shared/search";

import VerticalDivider from "../../../../shared/VerticalDivider";
import "./index.scss";

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};
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
			<div className="hamburger">
				<Button
					aria-controls="simple-menu"
					aria-haspopup="true"
					onClick={handleClick}
				>
					<MenuIcon />
				</Button>
				<Menu
					id="simple-menu"
					anchorEl={anchorEl}
					keepMounted
					open={Boolean(anchorEl)}
					onClose={handleClose}
				>
					<MenuItem onClick={handleClose}>
						<Search />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<HomeIcon />} title={"Home"} />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<AppsIcon />} title={"Customisation"} />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<ScheduleIcon />} title="Real-Time" />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<PersonIcon />} title="Audience" />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<SaveIcon />} title="SAVE" />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<SaveAltIcon />} title="EXPORT" />
					</MenuItem>
					<MenuItem onClick={handleClose}>
						<ListItem icon={<CachedIcon />} title="INSIGHT" />
					</MenuItem>
				</Menu>
			</div>
		</div>
	);
};

export default Header;
