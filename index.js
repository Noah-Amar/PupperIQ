const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const cors = require('cors');
const dbConfig = require('./knexfile');

const db = knex(dbConfig.development);
const server = express();

server.use(cors({ origin: "http://localhost:3000", credentials: true }));
server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  db('puppers').then(pups => {
    res.status(200).json(pups);
  }).catch(err => {
    res.status(500).json(err)
  })
})

server.post('/results', (req, res) => {
  console.log(req.body);

  const scores = req.body;
  let prevScore = 20;
  let currScore = 0;
  const result = [];
  db('puppers').then(pups => {
    pups.map(pup => {
      currScore = Math.abs(scores.sheds - pup.sheds) + Math.abs(scores.play - pup.playfulness) + Math.abs(scores.activity - pup.activity) + Math.abs(scores.affection - pup.affection) + Math.abs(scores.train - pup.trainability) + Math.abs(scores.size - pup.size) + Math.abs(scores.pets - pup.other_pets) + Math.abs(scores.maint - pup.maintenance) + Math.abs(scores.climate - pup.climate);
      console.log("score:", currScore);
      if (currScore < prevScore) {
        const pupper = pup;
        pupper.score = currScore;
        result.push(pupper);
        console.log('Pupper:', pupper);
        prevScore = currScore;
      }
    });
    res.status(200).json(result)
  }).catch(err => {
    res.status(500).json(err)
  })
})

server.listen(4500);
