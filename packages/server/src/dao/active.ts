import { Active } from '../models'
import { ActiveType } from './type'

class ActiveDao {
  static async setactivedata(params: []) {
    try {
      let item: ActiveType
      for (item of params) {
        if (item.type === 'ROOM_CARD') {
          item.value = item.data
          delete item.data
        }
        const hasIt = await Active.findOne({
          where: {
            id: item.id,
          },
        })
        if (!hasIt) {
          const res = await Active.create(item as any)
          if (!res) {
            throw new Error('新增活动数据错误')
          }
        } else {
          const res = await Active.update(item as any, {
            where: {
              id: item.id,
            },
          })
          if (!res) {
            throw new Error('修改活动数据错误')
          }
        }
      }
      const data = {
        msg: '保存数据成功',
      }
      return [null, data]
    } catch (err) {
      return [err, null]
    }
  }
  static async getactive() {
    try {
      const get = await Active.findAll({})
      if (get.length <= 0) {
        throw new Error('获取活动页数据错误')
      }
      const data = {
        drawPanelData: get.map((item) => {
          if (item.type !== 'ROOM_CARD') {
            item.value = null
          } else {
            item.data = item.value
            item.value = null
          }
          return item
        }),
      }
      return [null, data]
    } catch (err) {
      return [err, null]
    }
  }
}

export { ActiveDao }
