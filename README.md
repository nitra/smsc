# smsc

[![GitHub Super-Linter](https://github.com/nitra/smsc/workflows/npm-publish/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Configuration for test

add .env.test.local

```env
SMSC_PASS=secret
VODAFONE_PASS=secret
```

## Usage

```JavaScript
import { sendSms } from 'smsc'

await sendSms('+37120128611', 'test')
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
