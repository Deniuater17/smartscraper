import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Statistics from './pages/Statistics';
import WordCloudPage from './pages/WordCloudPage';
import History from './pages/History';
import Dashboard from './pages/dashboard';

const App = () => {
    return (
        <Router>
            <div style={{ display: "flex" }}>
                <Sidebar />
                <div style={{ marginLeft: "200px", padding: "20px", width: "100%" }}>
                    <Routes>
                        <Route path="/" element={<h1>Bienvenido al Dashboard</h1>} />
                        <Route path="/statistics" element={<Statistics />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/wordcloud" element={<WordCloudPage />} />
                        <Route path="/history" element={<History />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;

