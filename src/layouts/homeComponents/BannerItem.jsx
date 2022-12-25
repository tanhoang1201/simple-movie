import PropTypes from "prop-types";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { imageInstance } from "../../configs/api.config";

function BannerItem({ movie }) {
	const queryMd = useMediaQuery((theme) => theme.breakpoints.up("md"));
	const navigate = useNavigate();

	return (
		<div>
			<div
				className="h-[500px] rounded-lg bg-center bg-cover relative overflow-hidden"
				style={{
					backgroundImage: `url(${
						queryMd ? imageInstance(movie.backdrop_path) : imageInstance(movie.poster_path)
					}`,
				}}
			>
				<div className="absolute inset-0 bg-gradient-to-tr from-black to-[rgba(0,0,0,0.01)]"></div>
				<div
					className={`absolute left-0 bottom-0 w-full p-6 ${
						!queryMd ? "text-center top-[60%]" : ""
					}`}
				>
					{queryMd ? <h2 className="text-4xl font-bold mb-5">{movie.title}</h2> : ""}
					<div className={`flex gap-5 mb-8 ${!queryMd ? "justify-center" : ""} `}>
						<Button style="outline">Adventure</Button>
						<Button style="outline">Adventure</Button>
						{queryMd ? <Button style="outline">Adventure</Button> : ""}
					</div>
					<Button style="primary" onClick={() => navigate(`/movies/${movie.id}`)}>
						Watch Now
					</Button>
				</div>
			</div>
		</div>
	);
}

BannerItem.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default BannerItem;
