import { render, screen } from '@testing-library/react';
import YouTubeVideos from '../../src/components/YouTubeVideos';

test('renders YouTube video component', () => {
  render(<YouTubeVideos API_KEY="test-api-key" channelId="test-channel-id" videoType="all" />);
  const linkElement = screen.getByText(/Search videos/i);
  expect(linkElement).toBeInTheDocument();
});