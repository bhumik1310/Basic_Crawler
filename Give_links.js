import { Dataset,CheerioCrawler } from 'crawlee';
// const process = require('process');
import process from 'process';
var website = process.argv[2];
const crawler = new CheerioCrawler({
    async requestHandler({ request, enqueueLinks, log , body}) {
        log.info(request.url);
        await Dataset.pushData({
            url: request.url,
            
        });
        // Add all links from page to RequestQueue
        await enqueueLinks({
            strategy:'same-origin'
        });
    },
    maxRequestsPerCrawl: 2000,
    additionalMimeTypes:['application/pdf']
    // Limitation for only 10 requests (do not use if you want to crawl all links)
});

// Run the crawler with initial request
await crawler.run([website]);
await Dataset.exportToCSV('OUTPUT', { toKVS: 'my-data' });
