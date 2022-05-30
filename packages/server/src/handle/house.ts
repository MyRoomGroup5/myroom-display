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
    ctx.body = res.fail(err)
  }
}
const getHouseDetail = async (ctx: Context) => {
  const { id } = ctx.params

  const [err, data] = await HouseDao.getHouseDetail(id)

  if (!err) {
    ctx.response.status = 200
    ctx.body = res.json(data)
  } else {
    ctx.body = res.fail(err)
  }
}

export { getHouseDetail, getHouseList }
