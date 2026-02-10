import express from 'express'
import { authMiddleware, login } from './modules/auth'

const app = express()

app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/auth/login', login)

app.use(authMiddleware)

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
