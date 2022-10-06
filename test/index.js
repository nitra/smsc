import { sendSms } from '../src/index.js'
import { equal } from 'node:assert'
import TestDirector from 'test-director'

const tests = new TestDirector()

tests.add('successVf', async () => {
  const data = await sendSms('+380689540703', 'тест smsc', 'ChernigivUA')
  equal(data.cnt, 1)
})

tests.add('successSmsc', async () => {
  const data = await sendSms('+37120128611', 'тест smsc')
  equal(data.cnt, 1)
})

tests.add('failure', async () => {
  const data = await sendSms('000', 'тест smsc')
  equal(data.error_code, 1)
})

tests.run()
