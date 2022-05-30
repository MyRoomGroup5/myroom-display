import { House } from '../models'

class HouseDao {
  static async getHouseList() {
    try {
      const houst_list = await House.findAll({
        attributes: ['id', 'listing_name', 'pricing', 'squaremeter'],
        limit: 10,
      })

      if (houst_list.length <= 0) {
        throw new Error('查询房源列表错误')
      }
      const data = houst_list.map((item) => {
        if (typeof item.pricing === 'number') {
          item.pricing /= 100
        } else {
          item.pricing /= 100n
        }
        item.squaremeter /= 100

        return item
      })

      return [null, data]
    } catch (err: any) {
      return [err, null]
    }
  }
  static async getHouseDetail(id: bigint | number) {
    try {
      const data = await House.findOne({
        where: {
          id,
        },
      })

      return [null, data]
    } catch (err: any) {
      return [err, null]
    }
  }
}

export { HouseDao }
