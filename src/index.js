import checkEnv from '@nitra/check-env'
import fetch from 'node-fetch'

checkEnv(['SMSC_LOGIN', 'SMSC_PASS'])

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

    return data
  } catch (err) {
    console.error(err)
    return err
  }
}

const masks = [
  "050", "066", "095", "099", "067", "068", "096", "097", "098", "063", "093", "073", "077",
  "900", "901", "902", "903", "904", "905", "906", "908", "909", "910", "911", "912", "913", "914",
  "915", "916", "917", "918", "919", "920", "921", "922", "923", "924", "925", "926", "927", "928",
  "929", "930", "931", "932", "933", "934", "936", "937", "938", "939", "941", "950", "951", "952",
  "953", "954", "955", "956", "958", "960", "961", "962", "963", "964", "965", "966", "967", "968",
  "969", "970", "971", "977", "978", "980", "981", "982", "983", "984", "985", "986", "987", "988",
  "989", "991", "992", "993", "994", "995", "996", "997", "999"
]

export const getCountry = (phone) => {
  const mask = phone.slice(-10, -7)
  if (mask && masks.includes(mask)) {
    if (mask[0] === '0') {
      return 'ua'
    }
    if (mask[0] === '9') {
      return 'ru'
    }
    return undefined
  } 
  return undefined
}
