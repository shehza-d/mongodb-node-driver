import 'dotenv/config'

const MONGODB_URI = process.env.MONGODB_URI

if (!process.env.MONGODB_URI) {
    throw new Error('MONGODB_URI not found')
}

export default MONGODB_URI