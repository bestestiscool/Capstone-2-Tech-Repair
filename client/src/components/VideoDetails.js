import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { formatDuration } from '../utils/formatDuration';  // Import the formatDuration helper
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

const VideoDetails = ({ API_KEY }) => {
  const { id } = useParams();  // Get the video ID from the URL params
  const [video, setVideo] = useState(null);  // Store the video details
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Fetch the video details
    axios
      .get(`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${id}&part=snippet,contentDetails`)
      .then((response) => {
        setVideo(response.data.items[0]);  // Set the video details
        setLoading(false);  // Stop loading
      })
      .catch((error) => {
        console.error('Error fetching video details:', error);
        setLoading(false);
      });
  }, [API_KEY, id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!video) {
    return <p className="text-center text-danger">Video not found.</p>;
  }

  const { snippet, contentDetails } = video;
  const duration = formatDuration(contentDetails.duration); 

  return (
    <div className="container my-5 animate__animated animate__fadeIn">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">{snippet.title}</h2>
        <div className="d-flex justify-content-center">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${id}`}
            title={snippet.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="mb-4"
          ></iframe>
        </div>
        <p><strong>Duration:</strong> {duration}</p>  {/* Display formatted duration */}
        <p><strong>Description:</strong> {snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetails;
