const googleTrends = require('google-trends-api');

async function scrapeGoogleTrends() {
    try {
        const trends = await googleTrends.dailyTrends({
            geo: 'US', // Specify the region, e.g., 'US' for the United States
        });
        
        const data = JSON.parse(trends);
        let trendsArray = [];

        // Parse the response to extract trending topics
        data.default.trendingSearchesDays[0].trendingSearches.forEach((item) => {
            trendsArray.push({
                title: item.title.query,
                url: item.articles[0]?.url || null, // Get the URL of the top article
            });
        });

        console.log(trendsArray, "trends - using google-trends-api");

        return trendsArray;
    } catch (error) {
        console.error('Error fetching trends from Google Trends API:', error);
        return [];
    }
}

module.exports = {
    scrapeGoogleTrends
};
