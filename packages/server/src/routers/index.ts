import { router_user } from './user'
import { router_house } from './house'
import { router_agent } from './active'
import combineRouters from 'koa-combine-routers'

const router = combineRouters([router_user, router_house, router_agent])

export { router }
