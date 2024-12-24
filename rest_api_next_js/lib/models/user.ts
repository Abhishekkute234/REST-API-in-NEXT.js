// Import necessary functions and classes from the Mongoose library
import { Schema, models, model } from "mongoose";

// Define the User schema
const UserSchema = new Schema(
  {
    // Email field: Stores the user's email address
    // - Required: Must be provided when creating a user
    // - Unique: Ensures no duplicate email addresses in the database
    email: { type: String, required: true, unique: true },

    // Username field: Stores the user's username
    // - Required: Must be provided when creating a user
    // - Unique: Ensures no duplicate usernames in the database
    username: { type: String, required: true, unique: true },

    // Password field: Stores the user's password
    // - Required: Must be provided when creating a user
    // Note: The password should be hashed before being saved in the database
    password: { type: String, required: true },
  },
  {
    // Schema options
    // - `timestamps: true` automatically adds two fields:
    //   - `createdAt`: Records when the document was created
    //   - `updatedAt`: Records when the document was last updated
    timestamps: true,
  }
);

// Check if a model with the name 'User' already exists in Mongoose
// - If it exists, use the existing model to avoid redefining
// - If it doesn't exist, define a new model based on the UserSchema
const User = models.User || model("User", UserSchema);

// Export the User model so it can be imported and used in other files
export default User;
