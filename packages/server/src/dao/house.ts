import { House } from '../models'
import { house_title_detail, HouseDetail, house_item_type } from './type'
import { deal_for_name } from './deal_data'
import moment from 'moment'

class HouseDao {
  static async getHouseList() {
    try {
      const house_list = await House.findAll({
        attributes: [
          'id',
          'listing_name',
          'pricing',
          'squaremeter',
          'floor_plan_room',
          'floor_plan_hall',
        ],
        limit: 10,
      })

      if (house_list.length <= 0) {
        throw new Error('查询房源列表错误')
      }
      const data = house_list.map((item) => {
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

  static async getHouseBasic(id: bigint | number) {
    try {
      const basic_message = await House.findOne({
        attributes: [
          'id',
          'listing_name',
          'pricing',
          'squaremeter',
          'neighborhood_name',
          'floor_plan_room',
          'floor_plan_hall',
        ],
        where: {
          id,
        },
      })
      if (!basic_message) {
        throw new Error('查询房源基本信息失败')
      }
      let { pricing, squaremeter } = basic_message
      const { neighborhood_name, floor_plan_room, floor_plan_hall } = basic_message
      if (typeof pricing === 'number') {
        pricing /= 1000000
      } else {
        pricing /= 1000000n
      }
      squaremeter /= 100
      const data = {
        price: pricing,
        name: neighborhood_name,
        room_type: `${floor_plan_room}室${floor_plan_hall}厅`,
        ares: squaremeter,
      }
      return [null, data]
    } catch (err) {
      return [err, null]
    }
  }

  static async getHouseDetail(
    id: bigint | number,
  ): Promise<[Error | null, house_item_type[] | null]> {
    try {
      const houseDetail = await House.findOne({
        where: {
          id,
        },
      })
      if (!houseDetail) {
        throw new Error('获取房源详细信息失败')
      }
      const data: house_item_type[] = []
      let i: keyof HouseDetail
      for (i in house_title_detail) {
        if (data.length >= 10) {
          break
        }
        if (houseDetail[i] !== null) {
          let value: string | number | bigint | Date = houseDetail[i]
          if (typeof houseDetail[i] === 'number') {
            value = deal_for_name(i, houseDetail[i])
          }
          if (houseDetail[i] instanceof Date) {
            value = moment(houseDetail[i] as Date).format('YYYY-MM-DD')
          }
          const temp: house_item_type = {
            title: house_title_detail[i],
            value,
          }
          data.push(temp)
        }
      }
      return [null, data]
    } catch (err) {
      return [err as Error, null]
    }
  }
}

export { HouseDao }
