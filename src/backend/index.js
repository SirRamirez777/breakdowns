import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3001;

// Mock data for breakdowns
const breakdowns = [
  {
    BreakdownReference: 'BRK123',
    CompanyName: 'ABC Logistics',
    DriverName: 'John Doe',
    RegistrationNumber: '123-XYZ',
    BreakdownDate: '2023-10-10T10:00:00',
  },
  {
    BreakdownReference: 'BRK456',
    CompanyName: 'XYZ Transport',
    DriverName: 'Jane Smith',
    RegistrationNumber: '456-ABC',
    BreakdownDate: '2023-10-12T14:00:00',
  },
];

// API endpoint to return the list of breakdowns
app.get('/breakdowns', (req, res) => {
  res.json(breakdowns); // Send the list of breakdowns as a JSON response
});

app.get('/', (req, res) => {
  res.send('Welcome to the Breakdown API. Use /breakdowns to get the list of breakdowns.');
});


// Start the backend server
app.listen(port, () => {
  console.log(`Backend API running on http://localhost:${port}`);
});
