# @nitra/consola

[![GitHub Super-Linter](https://github.com/nitra/smsc/workflows/npm-publish/badge.svg)](https://github.com/marketplace/actions/super-linter)

## Show filename in console

Check security header in Cloud Functions

```JavaScript
import { createLogger } from '@nitra/consola'
const consola = createLogger(import.meta.url)

consola.debug('TEST')
```

## Show filename in console (browser version)

Check security header in Cloud Functions

```JavaScript
import { createLogger } from '@nitra/consola/browser'
const consola = createLogger(import.meta.url)

consola.debug('TEST')
```

## "Classic" consola

without filename

```JavaScript
import consola from '@nitra/consola'

consola.debug('TEST')
```
