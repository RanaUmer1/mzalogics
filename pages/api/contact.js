import { z } from 'zod'

const schema = z.object({ 
  name: z.string().min(2), 
  email: z.string().email(), 
  message: z.string().min(10) 
})

export default function handler(req, res){
  if (req.method === 'POST'){
    try {
      const body = schema.parse(req.body)
      console.log('Contact message:', body)
      return res.status(200).json({ ok: true })
    } catch (e) {
      return res.status(400).json({ ok: false, error: 'Invalid payload' })
    }
  }
  return res.status(200).json({ ok: true })
}