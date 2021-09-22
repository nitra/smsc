/* global describe, test, expect */
import consolaLib from '../src'

describe('consola', () => {
  test('can set level', () => {
    const consola = new consolaLib.Consola()
    expect(consola.level).toBe(3)

    for (let i = 0; i <= 5; i++) {
      consola.level = i
      expect(consola.level).toBe(i)
    }
  })

  test("silent log level does't print logs", async () => {
    const logs = []
    class TestReporter {
      log (logObj) {
        logs.push(logObj)
      }
    }

    const consola = new consolaLib.Consola({
      throttle: 100,
      level: consolaLib.LogLevel.Silent,
      reporters: [new TestReporter()]
    })
    for (let i = 0; i < 10; i++) {
      consola.log('SPAM')
    }
    await wait(200)
    expect(logs.length).toBe(0)
  })

  test('can see spams without ending log', async () => {
    const logs = []
    class TestReporter {
      log (logObj) {
        logs.push(logObj)
      }
    }

    const consola = new consolaLib.Consola({
      throttle: 100,
      reporters: [new TestReporter()]
    })
    for (let i = 0; i < 10; i++) {
      consola.log('SPAM')
    }
    await wait(200)
    expect(logs.length).toBe(7)
    // 6 + Last one indicating it repeated 4
    expect(logs[logs.length - 1].args).toEqual(['SPAM', '(repeated 4 times)'])
  })
})

function wait (delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}
