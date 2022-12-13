import { Routes, Route } from "react-router-dom";
import Container from "./pages/Container";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
function App() {
	return (
		<div className="">
			<Routes>
				<Route path="/" element={<Container />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
