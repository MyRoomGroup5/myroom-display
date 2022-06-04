import { Context } from 'vm'
import { Resolve } from '../core/resolve'
import { ActiveDao } from '../dao/active'

const res = new Resolve()

const setVideo = async (ctx: Context) => {
  try {
    ctx.response.body = res.json(ctx.request.files.file.newFilename)
  } catch {
    ctx.response.body = res.fail('文件存储错误')
  }
}

const setActive = async (ctx: Context) => {
  const get_message = ctx.request.body
  const [err, data] = await ActiveDao.setactivedata(get_message.drawPanelData)
  if (!err) {
    ctx.response.status = 200
    ctx.body = res.json(data)
  } else {
    ctx.body = res.fail(err as Error)
  }
}
const getActive = async (ctx: Context) => {
  const [err, data] = await ActiveDao.getactive()
  if (err) {
    ctx.body = res.fail(err as Error)
  }

  ctx.body = res.json(data)
}

export { setActive, getActive, setVideo }
