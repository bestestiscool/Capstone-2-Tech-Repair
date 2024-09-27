import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetchVideos from "../hooks/useFetchVideos";
import usePagination from "../hooks/usePagination";
import useSearch from "../hooks/useSearch";
import { formatDuration } from '../utils/formatDuration';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const YouTubeVideos = ({ API_KEY, channelId, videoType }) => {
  const [showSearch, setShowSearch] = useState(false);  // Control when the search bar is shown
  const videos = useFetchVideos(API_KEY, channelId, videoType);
  
  // Use the custom search hook
  const {
    filteredItems: filteredVideos,
    searchQuery,
    setSearchQuery,
  } = useSearch(videos, "title");

  // Use the custom pagination hook
  const videosPerPage = 12;  
  const {
    currentItems: currentVideos,
    paginate,
    totalPages,
    currentPage,
  } = usePagination(filteredVideos, videosPerPage);

  return (
    <div className="container">
      {/* Search button */}
      <button className="btn btn-outline-primary mb-3" onClick={() => setShowSearch(!showSearch)}>
        {showSearch ? "Close Search" : "Search Videos"}
      </button>

      {/* Conditionally render the search bar */}
      {showSearch && (
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search videos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      )}

      {/* Render the videos in a 3x4 grid layout */}
      <div className="row">
        {currentVideos.length === 0 && <p>No videos match your search</p>}
        {currentVideos.map((video) => {
          const videoId = video.id.videoId || video.id;
          const duration = formatDuration(video.contentDetails.duration);
          
          const durationParts = duration.split(':');
          let seconds = 0;

          if (durationParts.length === 3) {
            seconds = parseInt(durationParts[0]) * 3600 + parseInt(durationParts[1]) * 60 + parseInt(durationParts[2]);
          } else if (durationParts.length === 2) {
            seconds = parseInt(durationParts[0]) * 60 + parseInt(durationParts[1]);
          }

          const isShort = seconds <= 60;

          return (
            <div key={videoId} className="col-lg-4 col-md-6 mb-4">
              <div className="card h-100">
                <Link to={`/video/${videoId}`}>
                  <h5 className="card-title p-2">{video.snippet.title}</h5>
                </Link>
                <div className="embed-responsive embed-responsive-16by9">
                  <iframe
                    className="embed-responsive-item"
                    width="100%"
                    height="200"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={video.snippet.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="card-body">
                  <p className="card-text">Duration: {duration}</p>
                  <p className="card-text">{isShort ? "Youtube Shorts" : "Long Video"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination controls */}
      <div className="pagination justify-content-center mt-4">
        {[...Array(totalPages).keys()].map((number) => (
          <button
            key={number}
            className="btn btn-secondary mx-1"
            onClick={() => paginate(number + 1)}
            disabled={currentPage === number + 1}
          >
            {number + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default YouTubeVideos;
