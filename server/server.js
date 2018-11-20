import express from 'express';
import convert from './convert';

const app = express();


app.get('/', (req, res) => {
  res.send('go to /units/si');
});


app.get('/units/si', (req, res) => {
    res.send({
        Value: convert(req.query.units)
    });
});

export default app;