const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
	    useNewUrlParser: true,
	    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error(err));

app.get('/', (req, res) => {
	    res.send('API is running...');
});

app.listen(PORT, () => {
	    console.log(`Server running on http://localhost:${PORT}`);
});

const projectRoutes = require('./routes/projectRoutes');
app.use('/api', projectRoutes);
