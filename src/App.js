import './App.css';
import NavbarComponent from './layout/NavbarComponent';
import MovieState from './context/movie/MovieState';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFoundComponent from './layout/NotFoundComponent';
import AboutMeComponent from './layout/AboutMeComponent';
import MoviesComponent from './components/MoviesComponent';
import HomeComponent from './layout/HomeComponent';

const App = () => {
    return (
        <MovieState>
            <Router>
                <div>
                    <NavbarComponent></NavbarComponent>
                    <Routes>
                        <Route
                            path="/home"
                            element={<HomeComponent />}></Route>
                        <Route
                            path="/movies"
                            element={<MoviesComponent />}></Route>
                        <Route
                            path="/aboutMe"
                            element={<AboutMeComponent />}></Route>
                        <Route
                            path="*"
                            element={<NotFoundComponent />}></Route>
                    </Routes>
                </div>
            </Router>
        </MovieState>
    );
};

export default App;
