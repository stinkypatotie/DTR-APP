const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const recordRoutes = require('./routes/records');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://jhudielvendivil:6AmrrpBy0QNP6mIS@srdscluster.qfon3b6.mongodb.net/dtr?retryWrites=true&w=majority&appName=SRDSCluster', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/records', recordRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
