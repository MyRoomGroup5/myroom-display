import { User } from '../models'
import bcrypt from 'bcryptjs'

interface IUser {
  user_id?: number
  username?: string
  password?: string
  role?: number
  status?: number
  profile?: string
}

class UserDao {
  // 创建用用户
  static async create_new(params: IUser) {
    try {
      const { password, username, role } = params
      const hasUser = await User.findOne({
        where: {
          username,
        },
      })

      if (hasUser) {
        throw new global.errors.Existing('用户已经存在')
      }
      const res = await User.create({ username, password, role })
      console.log(res)
      const data = {
        username,
      }
      return [null, data]
    } catch (err: any) {
      return [err, null]
    }
  }

  // 验证密码
  static async verify(params: IUser) {
    const { username, password } = params
    // console.log(username)
    try {
      // 查询用户是否存在
      const user = await User.findOne({
        where: {
          username,
        },
      })

      if (!user) {
        throw new global.errors.AuthFailed('账号不存在')
      }

      let correct = false

      // 验证密码是否正确
      if (user && password) {
        correct = await bcrypt.compare(password, user.password)
      }

      if (!correct) {
        throw new global.errors.AuthFailed('密码不正确')
      }
      const { role } = user
      const data = {
        username,
        role,
      }
      return [null, data]
    } catch (err: any) {
      return [err, null]
    }
  }
}

export { UserDao }
