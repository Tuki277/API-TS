import mongoose from "mongoose"

export interface PositionDocument extends mongoose.Document {
    name: string;
    createAt: Date;
    updateAt: Date;
}

const PositionSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Position = mongoose.model("Position", PositionSchema)

export default Position;