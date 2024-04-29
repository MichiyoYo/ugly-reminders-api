import express from 'express';
import remindersRouter from './routers/reminders';

const app = express();

// Middleware
app.use(express.json()); // need to add this explicitly becaue express doesn't parse json by default
app.use('/reminders', remindersRouter); // add middleware to look at the routes

app.listen(8000, () => console.log('server started!'));

app.get('/', (req, res) => {
  res.send('hello world');
});
