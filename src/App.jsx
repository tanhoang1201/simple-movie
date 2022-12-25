import { Routes, Route } from "react-router-dom";
import Container from "./pages/Container";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./hooks";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyAHVUs0MCjm0rjqYQ_Dm9QtgM3oYJ60QXc",
	authDomain: "simple-movie-26201.firebaseapp.com",
	projectId: "simple-movie-26201",
	storageBucket: "simple-movie-26201.appspot.com",
	messagingSenderId: "665171918183",
	appId: "1:665171918183:web:6b55eec5b46292a00743c2",
	measurementId: "G-03Y2G8EC5J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
	return (
		<div className="">
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<Container />}>
					<Route index element={<Home />} />
					<Route path="movies" element={<Movies />} />
					<Route path="movies/:movieId" element={<MovieDetail />} />
				</Route>
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

export default App;
