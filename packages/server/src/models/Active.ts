import sequelize from '../core/db'
import { DataTypes, Model } from 'sequelize'

class Active extends Model {
  declare id: number
  declare type: string
  declare data: string
  declare width: number
  declare height: number
  declare left: string
  declare top: string
  declare color?: string
  declare fontSize?: string
}

// 初始用户模型
Active.init(
  {
    id: {
      type: DataTypes.INTEGER().UNSIGNED,
      primaryKey: true,
      autoIncrement: true,
      comment: '每个数据主键',
    },
    page_id: {
      type: DataTypes.INTEGER(),
      allowNull: true,
      comment: '活动页主键',
    },
    type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: '类型',
    },
    data: {
      type: DataTypes.TEXT,
      // defaultValue: 1,
      allowNull: true,
      comment: '内容',
    },
    value: {
      type: DataTypes.JSON,
    },
    width: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '宽度',
    },
    height: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '高度',
    },
    left: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '距离左侧',
    },
    top: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: '距离上面高度',
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '颜色',
    },
    fontSize: {
      type: DataTypes.STRING,
      allowNull: true,
      comment: '字体大小',
    },
  },
  {
    sequelize,
    modelName: 'Active',
    tableName: 'active',
  },
)

async function create_table_active() {
  await Active.sync({ alter: true })
  console.log('活动页数据模型表刚刚(重新)完善！')
}

export { Active, create_table_active }
