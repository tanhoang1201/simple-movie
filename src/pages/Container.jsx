import { Outlet } from "react-router-dom";
import Header from "../layouts/Header";

function Container() {
	return (
		<div>
			<Header />
			<Outlet />
		</div>
	);
}

export default Container;
