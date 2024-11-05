import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import YouTubeVideos from './components/YouTubeVideos';
import VideoDetails from './components/VideoDetails';
import RepairCostEstimator from './components/RepairCostEstimator';
import ProjectsGithub from './components/Projects-Github';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const channelId = process.env.REACT_APP_CHANNEL_ID;

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <header className="App-header">
          <Routes>
            <Route path="/" element={<HomePage API_KEY={API_KEY} channelId={channelId} videoType="all" />} />
            <Route path="/all-videos" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="all" />} />
            <Route path="/shorts" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="short" />} />
            <Route path="/long-videos" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="long" />} />
            <Route path="/video/:id" element={<VideoDetails API_KEY={API_KEY} />} />
            <Route path="/repair-cost-estimator" element={<RepairCostEstimator />} />
            <Route path="/portfolio" element={<ProjectsGithub />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;

