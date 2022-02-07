import mongoose from 'mongoose'

export interface ImageDocument extends mongoose.Document {
    title: string;
    urlImage: string;
    createAt: Date;
    updateAt: Date;
}

const ImageSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true
        },
        urlImage: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

const Image = mongoose.model("Image", ImageSchema);

export default Image