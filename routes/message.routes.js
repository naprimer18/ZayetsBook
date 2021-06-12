import { Router } from 'express';
import Message from '../models/Message.js';
const router = Router();

router.post('/home', async (req, res) => {
  try {
    let message = new Message({ message: req.body.message});
    message.save();
    await res.status(201).json({message: 'Message Was Saved !'})
  } catch (err) {
    res.status(500).json({message: 'Something wrong !'})
  }
})

router.delete('/deleteMessage', async (req, res) => {
  try {
    await Message.findByIdAndDelete({_id: req.body.id})
    res.status(200).json({message: "Message was deleted"})
  } catch(e) {
    res.status(500).json({message: 'Something wrong !'})
  }
})

router.get('/getAllMessages', async (req, res) => {
  try {
    const allMessages = await Message.find({})
    res.status(200).json(allMessages)
  } catch(e) {
    res.status(500).json({message: 'Something wrong !'})
  }
})

export default router;