import { sendSms } from '../src/index.js'
import { equal } from 'node:assert'
import TestDirector from 'test-director'

const tests = new TestDirector()

tests.add('success', async () => {
  const data = await sendSms('+37120128611', 'npm тест')
  equal(data.cnt, 1)
})

tests.add('failure', async () => {
  const data = await sendSms('000', 'тест')
  equal(data.error_code, 1)
})

tests.run()
