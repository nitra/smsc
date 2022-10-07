# smsc

[![GitHub Super-Linter](https://github.com/nitra/smsc/workflows/npm-publish/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Configuration for test

add .env.test.local

```env for vodafone
VODAFONE_LOGIN=38099XXXXXXX
VODAFONE_PASS=secret
VODAFONE_BASE_URL=https://address
VODAFONE_VALIDITY_PERIOD_SMS=000000230000000R
REDIS_CONN=address
```

```env for smsc
SMSC_LOGIN=login
SMSC_PASS=secret
```

## Usage

```JavaScript
import { sendSms } from 'smsc'

// --> vodafone використовується для номерів з українським кодом оператора. для решти - smsc

// ------------------------ vodafone
await sendSms('+380689540703', 'test sms') // буде відправлено від 'ChernigivUA'
await sendSms('+380689540703', 'test sms', 'vybeeraicom') // буде відправлено від 'vybeeraicom'

// буде відправлено від вказаного відправника([sender]) і з вказаної розсилки([distributionId])
// distributionId - id розсилки яка повинна бути створена в кабінеті Vodafone.
// [sender] - відправник який повинен бути створений в кабінеті Vodafone і підв'язаний під цю розсилку
await sendSms('+380689540703', 'test sms', '[sender]', '[distributionId]')
// ------------------------ vodafone

// ------------------------ smsc
await sendSms('+37120128611', 'test sms')
await sendSms('+37120128611', 'test sms', '[sender]')
// ------------------------ smsc

```

```env.VODAFONE_VALIDITY_PERIOD_SMS (example) (скільки часу vodafone буде намагатись відправити смс)
1хв. - 000000000100000R
...
30 хв. - 000000003000000R
...
1 год. - 000000010000000R
...
23 год. - 000000230000000R
```
