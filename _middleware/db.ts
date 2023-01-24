const mongoose = require('mongoose');

const db = process.env.MONGO_DB;
const options = {
   useNewUrlParser: true,
   useUnifiedTopology: true,
};

mongoose
   .set('strictQuery', false)
   .connect(db, options)
   .then(() => console.log('mongoDB connected'))
   .catch((err: Error) => {
      console.log(err);
   });

mongoose.Promise = global.Promise;
