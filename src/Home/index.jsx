import React from "react";
import { Link, useLocation } from "react-router-dom";

const Home = () => {
	const location = useLocation();
	return (
		<div className="home wrapper">
			<h1>Home Page</h1>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt.
			</p>
			<ul>
				<li>
					<Link
						className="frontpage-job"
						to="/modal/1"
						state={{ previousLocation: location }}
					>
						Modal1
					</Link>
				</li>
				<li>
					<Link
						className="frontpage-job"
						to="/modal/2"
						state={{ previousLocation: location }}
					>
						Modal2
					</Link>
				</li>
				<li>
					<Link
						className="frontpage-job"
						to="/modal/3"
						state={{ previousLocation: location }}
					>
						Modal3
					</Link>
				</li>
			</ul>
			<p>
				Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
				consectetur, adipisci velit, sed quia non numquam eius modi tempora
				incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim
				ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
				laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel
				eum iure reprehenderit qui in ea voluptate velit esse quam nihil
				molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas
				nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit
				voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque
				ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae
				dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
				aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
				qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
				dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
				non numquam eius modi tempora incidunt ut labore et dolore magnam
				aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
				exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea
				commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea
				voluptate velit esse quam nihil molestiae consequatur, vel illum qui
				dolorem eum fugiat quo voluptas nulla pariatur?
			</p>
		</div>
	);
};

export default Home;
