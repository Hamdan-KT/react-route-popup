import { Link, Outlet } from "react-router-dom";

function Layout() {
	return (
		<div>
			<div className="menu">
				<Link className="link" to="/">
					Home
				</Link>
				<Link className="link" to="/about">
					About
				</Link>
				<Link className="link" to="/contact">
					Contact
				</Link>
			</div>
			<Outlet />
		</div>
	);
}

export default Layout
