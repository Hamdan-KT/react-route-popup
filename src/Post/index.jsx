import React from "react";
import { useParams } from "react-router-dom";

function Post() {
	const { id } = useParams();
	return (
		<div className="home wrapper">
			<h1>Post {id}</h1>
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt.
			</p>
			<hr />
			<p>
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
				odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
				voluptatem sequi nesciunt.
			</p>
		</div>
	);
}

export default Post;
