// Pulling in express to create the APi server
const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON request body

// Create a route that listens for GET request on the root URL
app.post('/', (req, res) => {
    const acceptHeader = req.get('Accept');

    if(acceptHeader) {
        res.setHeader('Accept', acceptHeader);
    }
    
    const responseBody = {
        ...req.body
    }

    res.json(responseBody);

});

const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log('Server is running on port ${port}');      
});

module.exports = server;    