1. **Setting up a virtual environment**.

 ```
 python -m venv venv
 venv\Scripts\activate.bat
 ```

2.  **installing requirements** 

 ```
 pip install -r requirements.txt
 ```

3. **Running the scrawler**

 ```
 scrapy runspider script.py -o report-file.csv
 ```

 4. During the execution of the crawler the report-file.csv will be populated.