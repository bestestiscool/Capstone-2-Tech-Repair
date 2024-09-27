export const formatDuration = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = match[1] ? parseInt(match[1]) : 0;
  const minutes = match[2] ? parseInt(match[2]) : 0;
  const seconds = match[3] ? parseInt(match[3]) : 0;

  // Format the duration as H:MM:SS or MM:SS
  return [
    hours > 0 ? hours : null,
    minutes > 0 ? String(minutes).padStart(hours > 0 ? 2 : 1, '0') : '00',
    String(seconds).padStart(2, '0')
  ]
    .filter(Boolean)
    .join(':');
};
