const express = require('express');
const app = express();
const routes = require('./routes/tasks');

const tasks = require('./routes/tasks');
const PORT = 3000;

app.get('/hello', (req, res) => {
    res.send('Task Manager App');
});
app.use('/api/v1/tasks', tasks);

// app.get('/api/v1/tasks');
// app.post('/api/v1/tasks');
// app.get('/api/v1/tasks/:id');
// app.patch('/api/v1/tasks/:id');
// app.delete('/api/v1/tasks/:id');

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} ...`);
});
