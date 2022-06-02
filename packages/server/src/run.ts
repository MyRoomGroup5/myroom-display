import http from 'http'
import { PORT } from './constants'

async function run(listener: http.RequestListener) {
  const server = http.createServer(listener)
  let port = PORT
  while (true) {
    try {
      await listen(port)
      return
    } catch (e) {
      port += 1
    }
  }
  function listen(port: number) {
    let err: Error
    return new Promise<void>((rs, rj) => {
      server.once('error', (e) => {
        err = e
        rj(e)
      })
      server.listen(port, () => {
        if (err) return
        console.log(`Server listening on port ${port}`)
        rs()
      })
    })
  }
}

export default run
