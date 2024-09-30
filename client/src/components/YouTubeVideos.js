import React, { useState } from 'react';  // Importing useState from React
import { Link } from 'react-router-dom';  // Importing Link for navigation
import useFetchVideos from '../hooks/useFetchVideos';  // Custom hook to fetch videos
import useSearch from '../hooks/useSearch';  // Custom hook for search functionality
import usePagination from '../hooks/usePagination';  // Custom hook for pagination
import { formatDuration } from '../utils/formatDuration';  // Utility function to format video durations

const YouTubeVideos = ({ API_KEY, channelId, videoType }) => {
  const [showSearch, setShowSearch] = useState(false);  // State to toggle search bar visibility
  const { videos, error, loading } = useFetchVideos(API_KEY, channelId, videoType);  // Fetching videos using custom hook

  const { filteredItems: filteredVideos, searchQuery, setSearchQuery } = useSearch(videos, "title");  // Using custom search hook

  const videosPerPage = 12;
  const { currentItems: currentVideos, paginate, totalPages, currentPage } = usePagination(filteredVideos, videosPerPage);  // Using custom pagination hook

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-center text-danger">{error}</p>;  // Display error message
  }

  return (
    <div className="container">
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

      {/* Render the videos in a grid layout */}
      <div className="row">
        {currentVideos.length === 0 && <p>No videos match your search</p>}
        {currentVideos.map((video) => {
          const videoId = video.id.videoId || video.id;
          const duration = formatDuration(video.contentDetails.duration);  // Format duration

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
                  <p className="card-text">{isShort ? "YouTube Shorts" : "Long Video"}</p>
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
