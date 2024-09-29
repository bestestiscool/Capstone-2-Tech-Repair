import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TestAPIConnection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Make an API request to the backend
    axios.get(`${process.env.REACT_APP_API_URL}api/test`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data from API:", error);
      });
  }, []);

  return (
    <div>
      <h1>Test API Connection</h1>
      {data ? <p>{data.message}</p> : <p>Loading...</p>}
    </div>
  );
};

export default TestAPIConnection;
