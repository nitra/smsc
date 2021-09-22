/* global describe, test, expect */
import { sendSms } from '../src'

describe('consola', () => {
  test('can set level', () => {
    sendSms('+37120128611', 'тест')
      .then(() => {
        // Makes .then() return a rejected promise
        throw new Error('Oh no!')
      })
      .catch(error => {
        console.error('onRejected function called: ' + error.message)
      })

    // .then(ee => {

    // }).
    // const consola = new consolaLib.Consola()
    // expect(consola.level).toBe(3)

    // for (let i = 0; i <= 5; i++) {
    //   consola.level = i
    //   expect(consola.level).toBe(i)
    // }
  })
})
