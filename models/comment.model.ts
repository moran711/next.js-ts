import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  text: String,
  date: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models && mongoose.models.comment
  ? mongoose.models.comment
  : mongoose.model("comment", CommentSchema, "comment");