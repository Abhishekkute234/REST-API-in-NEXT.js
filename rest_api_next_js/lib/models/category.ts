import { Schema, models, model } from "mongoose";

const CategorySchema = new Schema(
  {
    title: { type: 'string', required: true },

    // take the user form the user schema 
    user: { type: Schema.Types.ObjectId, ref: "User" },

  },
  {
    timestamps: true,
  }
);

const Category = models.User || model("User", CategorySchema);

// Export the User model so it can be imported and used in other files
export default Category;
