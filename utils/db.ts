import mongoose from 'mongoose';
const MONGO_URL = process.env.MONGO_URL

const connectDB = async () => {
  const db = MONGO_URL;
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err);
  }
};

export default connectDB;
