import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import BottomNav from './components/BottomNav';
import Home from './pages/Home';
import FamilyMember from './pages/FamilyMember';
import About from './pages/About';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/family" element={<Home />} /> {/* Alias for now */}
                <Route path="/family/:id" element={<FamilyMember />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </AnimatePresence>
    );
};

function App() {
    return (
        <Router>
            <div className="container">
                <AnimatedRoutes />
                <BottomNav />
            </div>
        </Router>
    );
}

export default App;
