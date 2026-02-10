import request from 'supertest'
import express from 'express'
import bcrypt from 'bcrypt'
import { PrismaClient } from '@prisma/client'
import { login } from './auth'

const prisma = new PrismaClient()

const app = express()
app.use(express.json())
app.post('/auth/login', login)

describe('Auth login', () => {
  beforeAll(async () => {
    const hash = await bcrypt.hash('password123', 10)
    await prisma.user.create({
      data: { email: 'test@example.com', password: hash },
    })
  })

  afterAll(async () => {
    await prisma.user.deleteMany()
    await prisma.$disconnect()
  })

  it('returns JWT on valid credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'password123' })
    expect(res.status).toBe(200)
    expect(res.body.token).toBeDefined()
  })

  it('fails on invalid credentials', async () => {
    const res = await request(app)
      .post('/auth/login')
      .send({ email: 'test@example.com', password: 'wrong' })
    expect(res.status).toBe(401)
  })
})
