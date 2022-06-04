import { Active } from '../models'

class ActiveDao {
  static async setactivedata(params: []) {
    try {
      for (const item of params) {
        const res = await Active.create(item)
        if (!res) {
          throw new Error('新增活动数据错误')
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
  static async getactive(id: number) {
    try {
      const get = await Active.findAll({
        where: {
          id,
        },
        attributes: ['id', 'type', 'data', 'width', 'height', 'left', 'top', 'color', 'fontSize'],
      })
      if (get.length <= 0) {
        throw new Error('获取活动页数据错误')
      }
      const data = {
        drawPanelData: get,
      }
      return [null, data]
    } catch (err) {
      return [err, null]
    }
  }
}

export { ActiveDao }
