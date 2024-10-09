const express = require('express');
const mongoose = require('mongoose');
const { scrapeGoogleTrends } = require('./utils');
const TrendingTopic = require('./topicsSchema');

const router = express.Router();

router.get('/scrape-trends', async (req, res) => {
    try {
        const trends = await scrapeGoogleTrends();
        console.log(trends);

        // Save the scraped trends into MongoDB
        // for (const trend of trends) {
        //     const newTrend = new TrendingTopic(trend);
        //     await newTrend.save();
        // }

        res.json({ message: 'Scraping complete', trends });
    } catch (error) {
        res.status(500).json({ error: 'Failed to scrape or save trends' });
    }
});

module.exports = router;