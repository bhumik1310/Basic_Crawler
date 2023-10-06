# Basic_Crawler
A basic JS crawler based on crawlee that is subdivided into two scripts.

- "Get_links" takes in a link and outputs all the sub-links in the domain to ./storage/key-value-stores/OUTPUT.csv (Remove the links you do not want to crawl)
- "Crawl-Links" reads the CSV created from the folder itself , crawls all links present in the CSV one by one , stores them in a folder in a txt file which can be processed further.

#Usage Instructions:
- Download both scripts and make sure they're both in the same folder.
- run `node Give_links.js <website-name>`
- Check the links present in ./storage/key_value_stores/my-data/OUTPUT.csv and modify the ones you do not want to crawl.
- Make sure you have a folder named "CrawledData" in the directory as well.
- run `node Crawl_links.js`
- This automatically pulls the links from the CSV ,crawls them , processes out the Headers, Footers , nav etc. from the files and stores them in the folder "CrawledData/<website-name>" 
