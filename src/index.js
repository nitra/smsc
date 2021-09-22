import consola from 'consola'

class NReporter extends consola.FancyReporter {
  formatLogObj (logObj, { width }) {
    return `[${this.options.currentFile}] ${super.formatLogObj(logObj, {
      width
    })}`
  }
}

/**
 * pass import.meta.url
 * example: consola = createLogger(import.meta.url)
 *
 * @param {String} url
 * @return {Consola}
 */
export const createLogger = url => {
  const currentFile = new URL(url).pathname.split('/').pop()
  return consola.create({
    reporters: [new NReporter({ currentFile })]
  })
}

export default consola
