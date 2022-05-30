import Router from 'koa-router'
import { getHouseDetail, getHouseList } from '../handle/house'

const router_house = new Router({
  prefix: '/api/v1',
})

router_house.get('/house', (ctx) => {
  console.log('访问', ctx.request)
})
router_house.get('/house/list', getHouseList)

router_house.get('/house/:id', getHouseDetail)
export { router_house }
