import express from 'express';
import { router } from './routes';
const app = express()

app.set('Access-Control-Allow-Origin', '*')
app.use(express.json())
app.use(router)

app.listen(3030, () => { console.log('🔥 Running on Port 3030! 🔥') })