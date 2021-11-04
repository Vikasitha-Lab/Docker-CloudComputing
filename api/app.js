const express = require('express');

const app = express();

const PORT = 5000;

app.get('/', (req, res) => {
    res.json('api is working!');
});

//Start Server
app.listen(PORT, () => {
    console.log(`API is listening on PORT: ${PORT}`);
});

