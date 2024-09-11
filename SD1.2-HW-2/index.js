const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const players = [
    {
      id: 1,
      name: 'Virat Kohli',
      country: 'India',
      role: 'Batsman',
      runs: 12000,
      wickets: 4,
    },
    {
      id: 2,
      name: 'James Anderson',
      country: 'England',
      role: 'Bowler',
      runs: 1243,
      wickets: 600,
    },
    {
      id: 3,
      name: 'Kane Williamson',
      country: 'New Zealand',
      role: 'Batsman',
      runs: 7000,
      wickets: 29,
    },
    {
      id: 4,
      name: 'Pat Cummins',
      country: 'Australia',
      role: 'Bowler',
      runs: 750,
      wickets: 250,
    },
    {
      id: 5,
      name: 'Ben Stokes',
      country: 'England',
      role: 'All-rounder',
      runs: 4500,
      wickets: 150,
    },
  ];

// Exercise 2: Get all players
// Create an endpoint /players that’ll fetch all the cricket player data
// Send the data in response to the client
app.get('/players', (req, res) => {
    res.json({ players });
});

// Exercise 3: Get player by ID
// Create an endpoint /players/:id
// Fetch the player data based on the id
// Send the player data in response to the client
app.get('/players/:id',  (req, res) => {
    const id = parseInt(req.params.id);
    const player = players.find(player => player.id === id);

    if (player) {
        res.json({ player });
    } else {
        res.status(404).json({ message: "Player not found"});
    }
});

const port = 3000;
app.listen(port, () => {
    console.log("Server is running on the port number is: ", port);
});

