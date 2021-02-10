1. First Clone the repo and setup a **virtual environment**.

 ```
 python -m venv venv
 venv\Scripts\activate.bat
 ```

2.  Then **install scrapy** using,

 ```
 pip install scrapy
 ```

3. **Running the scrawler**

 ```
 scrapy runspider script.py -o report-file.csv
 ```

 4. During the execution of the crawler the report-file.csv will be populated.