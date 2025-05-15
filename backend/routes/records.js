const express = require('express');
const router = express.Router();
const Record = require('../models/Record');

router.post('/', async (req, res) => {
  const { employee, action, time, date } = req.body;
  const newRecord = new Record({ employee, action, time, date });
  await newRecord.save();
  res.status(201).json(newRecord);
});

router.get('/', async (req, res) => {
  const records = await Record.find().sort({ date: -1, time: -1 });
  res.json(records);
});

module.exports = router;
