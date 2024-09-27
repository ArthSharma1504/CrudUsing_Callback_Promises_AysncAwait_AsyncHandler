const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();
app.use(bodyParser.json());
app.use('/api',userRoutes);

app.listen(3000, ()=>{
    console.log('Server is running : http://localhost:3000');
});
