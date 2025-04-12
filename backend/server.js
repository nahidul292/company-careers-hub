const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize Sequelize
const sequelize = new Sequelize(
  'careers_hub',
  'user',
  'password',
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

// Define the Job model
const Job = sequelize.define('Job', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  requirements: {
    type: DataTypes.TEXT,
  },
  department: {
    type: DataTypes.STRING,
  },
  location: {
    type: DataTypes.STRING,
  },
  employmentType: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.ENUM('open', 'closed'),
    defaultValue: 'open',
  },
});

// Basic route
app.get('/', (req, res) => {
  res.send('Careers Hub Backend');
});

// Sync the model with the database
sequelize.sync()
  .then(() => {
    console.log('Database synced');
    // Start the server
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });