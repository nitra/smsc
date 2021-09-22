import checkEnv from '@47ng/check-env'
import fetch from 'node-fetch'

checkEnv.default({
  required: ['SMSC_LOGIN', 'SMSC_PASS']
})

const login = process.env.SMSC_LOGIN
const password = process.env.SMSC_PASS
const charset = 'utf-8'

// Отправка CMC
export const sendSms = async (phones, message) => {
  try {
    const params = new URLSearchParams()
    params.append('login', login)
    params.append('psw', password)
    params.append('charset', charset)
    params.append('fmt', 3)
    params.append('phones', phones)
    params.append('mes', message)

    const response = await fetch('https://smsc.ru/sys/send.php', {
      method: 'POST',
      body: params
    })
    const data = await response.json()

    console.log(data)

    return 1
  } catch (err) {
    console.error(err)
    return err
  }
}
