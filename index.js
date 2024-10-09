const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');
const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection
// mongoose.connect('mongodb://localhost:27017/trendyDB', { 
//     useNewUrlParser: true, 
//     useUnifiedTopology: true 
// });

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//     console.log('Connected to MongoDB');
// });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", require('./routes'));

cron.schedule('0 * * * *', async () => {
    console.log('Scraping trending topics every hour');
    await scrapeGoogleTrends();
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
