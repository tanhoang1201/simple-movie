import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { imageInstance } from "../../configs/api.config";

function BannerItem({ movie }) {
	const navigate = useNavigate();
	return (
		<div
			className="h-[500px] rounded-lg bg-center bg-cover relative overflow-hidden"
			style={{ backgroundImage: `url(${imageInstance(movie.backdrop_path)}` }}
		>
			<div className="absolute inset-0 bg-gradient-to-tr from-black to-[rgba(0,0,0,0.01)]"></div>
			<div className="absolute left-0 bottom-0 w-full p-6 ">
				<h2 className="text-4xl font-bold mb-5">{movie.title}</h2>
				<div className="flex gap-5 mb-8">
					<Button style="outline">Adventure</Button>
					<Button style="outline">Adventure</Button>
					<Button style="outline">Adventure</Button>
				</div>
				<Button style="primary" onClick={() => navigate(`/movies/${movie.id}`)}>
					Watch Now
				</Button>
			</div>
		</div>
	);
}

BannerItem.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default BannerItem;
