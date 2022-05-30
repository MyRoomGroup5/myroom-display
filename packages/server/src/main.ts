import Koa from 'koa'
import koaStatic from 'koa-static'
import koaBody from 'koa-body'
import jwt from 'koa-jwt'
import { config } from './config'
import run from './run'
import { router } from './routers'
import HttpException from './core/http-exception'

const app = new Koa()

// 定义错误类型
global.errors = HttpException
global.config = config

app.use(koaBody())

app.use(jwt({ secret: global.config.security.secretKey }).unless({ path: [/[login,register]$/] }))

app.use(router())

app.use(koaStatic(config.staticFilePath))

run(app.callback())
