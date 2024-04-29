import Router from 'express';
import { CreateReminderDto } from '../dto/create-reminder';
import Reminder from '../models/reminder';

const router = Router();

const reminders: Reminder[] = [];

router.get('/', (req, res) => {
  res.send(reminders);
});

router.post('/', (req, res) => {
  const { title } = req.body as CreateReminderDto;
  const reminder = new Reminder(title);
  reminders.push(reminder);
  res.json(reminder);
});

export default router;
