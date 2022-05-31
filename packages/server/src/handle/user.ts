import { Context } from 'vm'
import { UserDao } from '../dao/user'
import { Resolve } from '../core/resolve'
import jwt from 'jsonwebtoken'
import { config } from '../config'

const res = new Resolve()
const register = async (ctx: Context) => {
  const get_message = ctx.request.body

  const [err, data] = await UserDao.create_new(get_message)
  if (!err) {
    ctx.response.status = 200
    ctx.body = res.json(data)
  } else if (err instanceof global.errors.Existing) {
    ctx.body = err
  } else {
    ctx.body = res.fail(err)
  }
}

const login = async (ctx: Context) => {
  const get_message = ctx.request.body
  const [err, username] = await UserDao.verify(get_message)
  if (!err) {
    ctx.response.status = 200
    const token = jwt.sign({ username }, config.security.secretKey, {
      expiresIn: config.security.expiresIn,
    })
    const data = {
      ...username,
      token,
    }
    ctx.body = res.json(data)
  } else if (err instanceof global.errors.AuthFailed) {
    ctx.body = err
  } else {
    ctx.body = res.fail(err)
  }
}

export { register, login }
