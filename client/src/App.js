import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';  
import './App.css';
import YouTubeVideos from './components/YouTubeVideos';  
import VideoDetails from './components/VideoDetails'; 
import RepairCostEstimator from './components/RepairCostEstimator';  
import ProjectsGithub from './components/Projects-Github';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const channelId = process.env.REACT_APP_CHANNEL_ID;

console.log(">>>>>>>>>>>>",API_KEY);
console.log(">>>>>>>>>>>>>",channelId);

// const API_KEY = 'AIzaSyBxM_Hd9rJA4_G91pLzwE0wdL8rAc9i_zI';  // Replace with your actual API key
// const channelId = 'UChaq0e7KkMnkzWtJcjtf32A';  // Replace with your YouTube Channel ID

function App() { 

  return (
    <Router>
      <div className="App">
        <Navbar />  
        <header className="App-header">
          <Routes>
            <Route path="/" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="all" />} />  
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
