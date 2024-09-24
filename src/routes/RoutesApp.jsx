import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import EpisodeListPage from '../pages/EpisodeListPage';
import PlayerPage from '../pages/PlayerPage';
import ScrollToTop from '../utils/ScrollToTop';


const RoutesApp = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/series/:serie" element={<EpisodeListPage />} />
                <Route path="/episode/:episode" element={<PlayerPage />} />
            </Routes>
        </Router>
    )
}

export default RoutesApp
