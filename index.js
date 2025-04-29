import express from 'express';
import connectToDB from './connection.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import userRouter from './routes/userRoute.js';

const app = express(); // Create a new instance of express
const PORT = 8000; // Define a port
const URL = 'mongodb+srv://ravikantrathod:ravikantrathod143@shoppyglobe.ycoavgf.mongodb.net/?retryWrites=true&w=majority&appName=shoppyglobe';

// Define middleware
app.use(express.json()); // Middleware to parse JSON data

// Define a route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Use routes with proper base path
app.use('/api', productRouter); // Route related to products
app.use('/api', cartRouter);    // Route related to cart items
app.use('/api', userRouter);    // Route related to users

// Connecting to DB and starting the server
connectToDB(URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} & DB connected`);
    });
  })
  .catch((err) => {
    console.error(err.message);
  });



// atlas mongodb
  //  password= ravikantrathod143
  // username = ravikantrathod