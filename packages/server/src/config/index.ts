import path from 'path'
import { getDirname } from '../utils'
const __dirname = getDirname()

const config = {
  staticFilePath: path.join(__dirname, '../static'),
}

export { config }
