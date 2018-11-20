import express from 'express';
import convert from './convert';

const app = express();

app.get('/units/si', (req, res) => {
    res.send({
        Value: convert(req.query.units)
    });
});

export default app;