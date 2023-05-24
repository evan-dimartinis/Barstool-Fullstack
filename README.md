# Barstool-Fullstack
# Get Started
In the main project directory, run:
1. npm install
2. node app.js

Navigate to frontend folder, run:
1. npm install
2. npm start

# About
This is a very basic React web application with 2 main screens displaying the MLB box score and NBA box score. All styling for this web application was written from scratch, no out of the box elements were used.

The backend is also a very simple server using express.

## Data calling
Currently, the front end application is sending a request to the server every 10 seconds to retreive the latest score updates. The server receives this request, checks the mongoDB cache for the latest update. If this latest update was created less than 15 seconds ago, the server will return the cached data to the front end. If the latest update is older than 15 seconds, the NBA endpoint will randomly increment the data values, while the MLB endpoint will simply return the data from the original model given in the project description, representing a data call.

## Potential Improvements
For the sake of time, this project is very simple and would need various enhancements before being put into production. These enhancements include, but are not limited to:
1. Server Security
2. A uniform styling scheme
3. More efficient data-calling using better data models for specific UX components
