import User from '../models/User.js'
import { Router } from 'express'
const router = Router();

router.post('/registrations', async (req, res) => {
  try {
    const { login, password } = req.body 
    const candidate = await User.findOne({login});
    if (candidate) {
      return res.status(400).json({ message: 'This user was registrated'})
    }
    const user = new User({ login, password })
    await user.save();
    res.status(200).json({message: 'User was created', success: true})
  } catch (err) {
    res.status(500).json({message:'Something wrong !'})
  }
})

router.post('/login', async (req, res) => {
  try{
    const { login, password } = req.body;
    const user = await User.findOne({login});
    if (!user) {
      return res.status(404).json({message: "This is login wasn't found"})
    }
    if (password !== user.password) {
      return res.status(400).json({message: "Password mismatch"})
    }
    res.json({id: user._id, login: user.login, success: true})
  } catch (err) {
    res.status(500).json({message: 'Something wrong !'})
  }
})

export default router;