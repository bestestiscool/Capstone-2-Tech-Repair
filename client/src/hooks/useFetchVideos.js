import { useState, useEffect } from "react";
import axios from "axios";

const useFetchVideos = (API_KEY, channelId, videoType) => {
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null); // Error state for API errors
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Reset error state before making the request
    setError(null);
    setLoading(true);

    // Fetch the list of videos from the channel
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UU${channelId.slice(2)}&key=${API_KEY}&maxResults=50`
      )
      .then((response) => {
        const videoIds = response.data.items
          .map((item) => item.snippet.resourceId.videoId)
          .join(",");

        // Fetch the details of each video (including duration)
        axios
          .get(
            `https://www.googleapis.com/youtube/v3/videos?key=${API_KEY}&id=${videoIds}&part=contentDetails,snippet`
          )
          .then((response) => {
            // Update the filtering logic to include both short and long videos when videoType is 'all'
            const filteredVideos = response.data.items.filter((video) => {
              const duration = convertDuration(video.contentDetails.duration);
              if (videoType === "short") return duration <= 60;
              if (videoType === "long") return duration > 60;
              return true; // Include all videos when videoType is 'all'
            });
            setVideos(filteredVideos); // Set the filtered videos
            setLoading(false); // Stop loading
          })
          .catch((error) => {
            console.error("Error fetching video details:", error);
            setError("Failed to fetch video details. Please try again later.");
            setLoading(false); // Stop loading
          });
      })
      .catch((error) => {
        console.error("Error fetching YouTube playlist:", error);
        setError("Failed to fetch videos from YouTube. Please try again later.");
        setLoading(false); // Stop loading
      });
  }, [API_KEY, channelId, videoType]);

  // Helper function to convert YouTube duration to seconds
  const convertDuration = (duration) => {
    const match = duration.match(/PT(\d+M)?(\d+S)?/);
    const minutes = match[1] ? parseInt(match[1]) : 0;
    const seconds = match[2] ? parseInt(match[2]) : 0;
    return minutes * 60 + seconds;
  };

  return { videos, error, loading }; // Return videos, error, and loading states
};

export default useFetchVideos;
