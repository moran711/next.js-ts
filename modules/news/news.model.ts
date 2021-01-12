import mongoose from 'mongoose';

const NewsSchema = new mongoose.Schema({
  text: String,
  title: String,
  image: String
});
export default mongoose.models && mongoose.models.news
  ? mongoose.models.news
  : mongoose.model("news", NewsSchema, "news");