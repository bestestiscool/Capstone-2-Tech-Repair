import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import YouTubeVideos from './components/YouTubeVideos';
import VideoDetails from './components/VideoDetails';
import RepairCostEstimator from './components/RepairCostEstimator';
import ProjectsGithub from './components/Projects-Github';
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
// import { Navigation } from "./components/navigation";
import JsonData from "./data/data.js";
import "./App.css";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
const channelId = process.env.REACT_APP_CHANNEL_ID;

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
        {/* <Navigation /> */}
          <Routes>
            <Route path="/" element={<HomePage API_KEY={API_KEY} channelId={channelId} videoType="all" />} />
            <Route path="/all-videos" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="all" />} />
            <Route path="/shorts" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="short" />} />
            <Route path="/long-videos" element={<YouTubeVideos API_KEY={API_KEY} channelId={channelId} videoType="long" />} />
            <Route path="/video/:id" element={<VideoDetails API_KEY={API_KEY} />} />
            <Route path="/repair-cost-estimator" element={<RepairCostEstimator />} />
            <Route path="/portfolio" element={<ProjectsGithub />} />
            <Route path="/about" element={<About data={landingPageData.About} />} />
            <Route path="/services" element={<Services data={landingPageData.Services} />} />
            <Route path="/gallery" element={<Gallery data={landingPageData.Gallery} />} />
            <Route path="/contact" element={<Contact data={landingPageData.Contact} />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
