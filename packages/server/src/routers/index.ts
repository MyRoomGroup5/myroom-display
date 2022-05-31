import { router_user } from './user'
import { router_house } from './house'
import combineRouters from 'koa-combine-routers'

const router = combineRouters([router_user, router_house])

export { router }
