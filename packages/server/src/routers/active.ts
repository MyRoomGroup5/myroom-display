import Router from 'koa-router'
import { setActive, getActive, setVideo } from '../handle/active'

const router_agent = new Router({
  prefix: '/api/v1',
})

router_agent.post('/upload', setVideo)

router_agent.post('/agent', setActive)

router_agent.get('/agent/:id', getActive)

export { router_agent }
