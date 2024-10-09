const mongoose = require('mongoose');

const trendingTopicSchema = new mongoose.Schema({
    title: String,
    url: String,
    timestamp: { type: Date, default: Date.now }
});

const TrendingTopic = mongoose.model('TrendingTopic', trendingTopicSchema);
