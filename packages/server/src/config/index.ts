import path from 'path'
import { getDirname } from '../utils'
const __dirname = getDirname()

const config = {
  environment: 'dev',
  database: {
    dbName: 'myroom5',
    host: 'localhost',
    port: 3306,
    user: 'myroom5',
    password: 'myroom',
  },
  security: {
    secretKey: 'secretKey',
    expiresIn: '1h',
  },
  staticFilePath: path.join(__dirname, '../static'),
}

export { config }
