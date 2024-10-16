// BreakdownList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const BreakdownList = () => {
  const [breakdowns, setBreakdowns] = useState([]); // State to hold breakdown data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for errors

  useEffect(() => {
    // Fetch breakdown data from the backend
    axios.get('http://localhost:3001/breakdowns') // Update the URL to match your backend route
      .then(response => {
        setBreakdowns(response.data); // Set the fetched data to state
        setLoading(false); // Disable the loading state
      })
      .catch(error => {
        setError('Error fetching breakdowns'); // Handle errors
        setLoading(false);
      });
  }, []); // Empty dependency array ensures this effect runs once when the component mounts

  // Show a loading spinner or message
  if (loading) {
    return <p>Loading breakdowns...</p>;
  }

  // Show an error message if fetching failed
  if (error) {
    return <p>{error}</p>;
  }

  // Render the list of breakdowns
  return (
    <div>
      <h2>Breakdown List</h2>
      <table>
        <thead>
          <tr>
            <th>Reference</th>
            <th>Company</th>
            <th>Driver</th>
            <th>Registration Number</th>
            <th>Breakdown Date</th>
          </tr>
        </thead>
        <tbody>
          {breakdowns.map((breakdown) => (
            <tr key={breakdown.BreakdownReference}>
              <td>{breakdown.BreakdownReference}</td>
              <td>{breakdown.CompanyName}</td>
              <td>{breakdown.DriverName}</td>
              <td>{breakdown.RegistrationNumber}</td>
              <td>{new Date(breakdown.BreakdownDate).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BreakdownList;


