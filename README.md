# smsc

[![GitHub Super-Linter](https://github.com/nitra/smsc/workflows/npm-publish/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Configuration for test

add .env.test.local

```env
SMSC_PASS=secret
```

## Usage

```JavaScript
import { sendSms } from '../src'

await sendSms('+37120128611', 'test')
```
