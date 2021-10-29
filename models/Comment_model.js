import mongoose from "mongoose";
const { Schema, model } = mongoose;

export const User_commentSchema = new Schema({
	//username of person who posted a comment
	user_name: {
		type: String,
		required: true,
	},

	//posted comment
	user_comment: {
		type: String,
	},
});

const CommentModel = model("comment", User_commentSchema);

export default CommentModel;
