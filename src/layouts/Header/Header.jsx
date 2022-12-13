import { NavLink } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<NavLink to="/" className={({ isActive }) => (isActive ? "text-primary" : "")}>
					Home
				</NavLink>
				<NavLink to="/movies" className={({ isActive }) => (isActive ? "text-primary" : "")}>
					Movies
				</NavLink>
			</nav>
		</header>
	);
}

export default Header;
