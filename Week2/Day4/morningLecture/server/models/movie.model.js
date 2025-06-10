import mongoose  from "mongoose";

// create movie schema

const movieSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            minLength: 2
        },
        description:{
            type: String,
            required: true,
            minLength: 10
        }
    },
    {
        timestamps: true //Automatically add createdAt and updatedAt fields
    }
)
const Movie = mongoose.model("Movie", movieSchema)
export default Movie