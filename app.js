const express = require('express');
const app = express();

const DbConnection = require('./Config/Config');
const UserRouter = require('./Users/Routes/UserRouter');
const ShopRouter = require('./Shops/Routes/ShopRouter');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Database Connection
async function connectDB() {
    try {
        await DbConnection();
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection failed:", error);
    }
}

connectDB();

// Routes
app.use('/Users', UserRouter);
app.use('/Shops', ShopRouter);

// Start the server
const PORT = 3000;

app.listen(PORT, (err) => {
    if (err) {
        console.error(`Error starting the server: ${err.message}`);
    } else {
        console.log(`Server is running on port ${PORT}`);
    }
});
