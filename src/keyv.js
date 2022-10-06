import KeyvRedis from '@keyv/redis'
import Keyv from 'keyv'
import { isProd } from '@nitra/isenv'
import checkEnv from '@nitra/check-env'

let store
if (isProd) {
  checkEnv(['REDIS_CONN'])
  store = new KeyvRedis(process.env.REDIS_CONN)
} else {
  store = new Map()
}

export const keyv = new Keyv({ store, namespace: 'smsc' })

// Handle DB connection errors
keyv.on('error', err => console.log('Connection Error', err))
