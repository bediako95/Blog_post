import mongoose from "mongoose";
import { PostSchema } from "./Post_model";
const { Schema, model } = mongoose;

const AuthorSchema = new Schema({
	//name of the author
	name: {
		type: String,
		required: true,
	},

	//details of  posts
	posts: {
		type: [PostSchema],
	},
});

const AuthorModel = model("author", AuthorSchema);

export default AuthorModel;
