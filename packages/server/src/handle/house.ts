import { Context } from 'vm'
import { Resolve } from '../core/resolve'
import { HouseDao } from '../dao/house'

const res = new Resolve()

const getHouseList = async (ctx: Context) => {
  const [err, data] = await HouseDao.getHouseList()

  if (!err) {
    ctx.response.status = 200
    ctx.body = res.json(data)
  } else {
    ctx.body = res.fail(err as Error)
  }
}
const getHouseDetail = async (ctx: Context) => {
  const { id } = ctx.params

  const [err1, detail_message] = await HouseDao.getHouseDetail(id)
  const [err2, basic_message] = await HouseDao.getHouseBasic(id)
  if (err1) {
    ctx.body = res.fail(err1 as Error)
  }
  if (err2) {
    ctx.body = res.fail(err2 as Error)
  }
  const tags: string[] = []
  const len = 3
  if (detail_message) {
    detail_message.forEach((item) => {
      if (tags.length >= len) {
        return
      }
      if (item.title === '楼层位置') {
        tags.push(`${item.value}楼层`)
      }
      if (item.title === '电梯' && item.value === '有') {
        tags.push('有电梯')
      }
      if (item.title === '房源类型') {
        tags.push(item.value as string)
      }
      if (item.title === '装修类型' && item.value === '精装') {
        tags.push('精装修')
      }
      if (item.title === '房本年限') {
        tags.push(item.value as string)
      }
      if (item.title === '房屋类型') {
        tags.push(item.value as string)
      }
      if (item.title === '交易权属') {
        tags.push(item.value as string)
      }
    })
  }
  const data = {
    tags,
    basic_message,
    detail_message,
  }
  ctx.body = res.json(data)
}

export { getHouseDetail, getHouseList }
