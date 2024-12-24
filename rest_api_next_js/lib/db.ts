// Import mongoose library for database operations
// This file is created for database connection 

import mongoose from "mongoose";

// Load the MongoDB URI from environment variables
const MONGODB_URI = process.env.MONGODB_URI;

// Define an asynchronous function to establish a database connection
const connect = async () => {
  // Check the current connection state of mongoose
  const connectionState = mongoose.connection.readyState;

  // If the connection state is 1, it means the database is already connected
  if (connectionState === 1) {
    console.log("Already connected to the database");
    return; // Exit the function
  }

  // If the connection state is 2, it means a connection is already in progress
  if (connectionState === 2) {
    console.log("Connecting to the database");
    return; // Exit the function
  }

  try {
    // Attempt to establish a connection to the MongoDB database
    await mongoose.connect(MONGODB_URI, {
      dbName: 'next14restapi', // Name of the database to use
      bufferCommands: true,   // Enable buffering of commands until the connection is established
      useNewUrlParser: true,  // Use the new MongoDB connection string parser
      useUnifiedTopology: true // Use the new server discovery and monitoring engine
    });

    console.log("Connected to the database"); // Log successful connection
  } catch (err) {
    // Handle any errors that occur during the connection process
    console.error("Error connecting to the database:", err);
    throw new Error("Failed to connect to the database");
  }
};

// Export the connect function as the default export of the module
export default connect;
