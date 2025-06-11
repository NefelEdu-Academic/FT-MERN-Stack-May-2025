import mongoose from "mongoose"

const movieSchema = new mongoose.Schema(
    {
        title:{
            type: String,
            required: true,
            minLength: 2
        },
        description: {
            type: String,
            required: true,
            minLength: 10
        }
    },
    {
        timestamps: true
    }
)
const Movie = mongoose.model("Movie", movieSchema)
export default Movie