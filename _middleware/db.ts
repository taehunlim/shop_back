import mongoose from 'mongoose';

const db = process.env.MONGO_DB as string;
const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

mongoose
   .set('strictQuery', false)
   .connect(db)
   .then(() => console.log('mongoDB connected'))
   .catch((err: Error) => {
      console.log(err);
   });

mongoose.Promise = global.Promise;
