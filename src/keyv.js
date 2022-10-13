import KeyvRedis from '@keyv/redis'
import Keyv from 'keyv'

let store
if (process.env.REDIS_CONN) {
  store = new KeyvRedis(process.env.REDIS_CONN)
} else {
  store = new Map()
}

export const keyv = new Keyv({ store, namespace: 'smsc' })

// Handle DB connection errors
keyv.on('error', err => console.log('Connection Error', err))
