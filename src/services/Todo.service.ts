import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import Todo, { TodoDocument } from "../models/todo.model";

//get all todo
export const getAllTodo = async (query: FilterQuery<TodoDocument>) => {
    return Todo.find(query).lean();
}

//create todo
export const createTodo = async (input: DocumentDefinition<TodoDocument>) => {
    try {
        return await Todo.create(input);
    } catch (error: any) {
        throw new Error(error);
    }
}

//delete todo
export const deleteTodo = async (query: FilterQuery<TodoDocument>) => Todo.deleteOne(query);

//update todo
export const findAndUpdateTodo = (query: FilterQuery<TodoDocument>, update: UpdateQuery<TodoDocument>, options: QueryOptions = { lean: true}) => Todo.findOneAndUpdate(query, update, options)

//get to do by id
export const findTodo = async (query: FilterQuery<TodoDocument>, options: QueryOptions = {lean: true}) => Todo.findOne(query, {}, options);