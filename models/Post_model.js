import mongoose from "mongoose";
import { User_commentSchema } from "./Comment_model";
const { Schema, model } = mongoose;

export const postSchema = new Schema({
	//title of post
	title: {
		type: String,
		required: true,
	},

	//details of blog
	blog_details: {
		type: String,
	},

	//date
	blog_date: {
		type: Date,
		default: Date.now(),
	},

	//author of post
	post_author: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "author",
	},

	//banner for the post
	post_banner: {
		type: String,
	},

	//displays all comments on post
	user_comments: {
		type: [User_commentSchema],
	},

	//likes for a specific post
	likes: {
		type: Number,
		default: 0,
	},

	//unlikes pertaining to post
	Unlikes: {
		type: Number,
		default: 0,
	},
});

const postModel = model("post", postSchema);

export default postModel;
