import React from "react";
import SidePanel from "./components/modules/SidePanel";
import Details from "./components/modules/Details";

import "./App.scss";
import "./sass/helpers/index.scss";
const App = () => {
	return (
		<div className="App">
			<SidePanel />
			<Details />
		</div>
	);
};

export default App;
