import express from 'express'
import mongoose from 'mongoose'
import bookRouter from './routes/message.routes.js'
import userRouter from './routes/user.routes.js'
import path,{dirname } from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3001;

app.use(express.json({ extended: true }))
app.use('/api', bookRouter)
app.use('/api', userRouter)

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.join(__dirname, 'client', 'build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const startApp = async () => {
  try {
    await mongoose.connect('mongodb+srv://vlad:12345vlad@cluster0.pvebi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })
    console.log('mongo connect is succes !');
    app.listen(PORT, () => {
      console.log(`listening on ${PORT}`)
    })
  }
  catch (err) {
    console.log(err)
  }
}

startApp()

app.get('/', (req, res) => {
  res.send('Welcome')
})