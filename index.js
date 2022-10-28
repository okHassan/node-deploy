const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        "name": "hassan"
    })
})

app.listen(5000, () => {
    console.log('server run success');
})