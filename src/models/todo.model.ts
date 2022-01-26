import mongoose from 'mongoose'

export interface TodoDocument extends mongoose.Document {
    name: string,
    status: boolean,
    description: string,
    createAt: Date,
    updateAt: Date
}

const TodoSchema = new mongoose.Schema (
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        status: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true
    }
)

const Todo = mongoose.model("Todo", TodoSchema);

export default Todo;