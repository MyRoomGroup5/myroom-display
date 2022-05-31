import bcrypt from 'bcryptjs'
import sequelize from '../core/db'
import { DataTypes, Model } from 'sequelize'

// @Table
class User extends Model {
  declare user_id: number
  declare username: string
  declare password: string
  declare role: number
  declare status: number
  declare profile: string
}

// 初始用户模型
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER().UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '用户主键ID',
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
      // 备注
      comment: '用户昵称',
    },
    role: {
      type: DataTypes.INTEGER(),
      // defaultValue: 1,
      allowNull: false,
      comment: '角色， 1用户， 2经纪人',
    },
    password: {
      type: DataTypes.STRING,
      set(val: string) {
        // 加密
        const salt = bcrypt.genSaltSync(10)
        // 生成加密密码
        const psw = bcrypt.hashSync(val, salt)
        console.log(psw)

        this.setDataValue('password', psw)
      },
      allowNull: false,
      comment: '登录密码',
    },
    status: {
      type: DataTypes.TINYINT,
      allowNull: true,
      defaultValue: 1,
      comment: '用户状态:0-删除,1-正常,2-在线',
    },
    profile: {
      type: DataTypes.STRING,
      defaultValue: '默认头像',
      comment: '用户头像',
    },
  },
  {
    sequelize,
    modelName: 'user',
    tableName: 'users',
  },
)

async function create_table_user() {
  await User.sync({ alter: true })
  console.log('用户模型表刚刚(重新)完善！')
}

export { User, create_table_user }
