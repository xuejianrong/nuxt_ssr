const Log4js = require('koa-log4')
const LogConf = require('./log4.config')
const Koa = require('koa')
const path = require('path')
const { Nuxt, Builder } = require('nuxt')
const AutoRoutes = require('./autoRoutes')

const app = new Koa()
const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(app.env === 'production')

// 生成logs目录 && 加载配置文件 start
const logPath = path.join(__dirname, 'logs')
try {
  require('fs').mkdirSync(logPath)
} catch (err) {
  if (err.code !== 'EEXIST') {
    console.error('Could not set up log directory, error was: ', err)
    process.exit(1)
  }
}
Log4js.configure(LogConf, {cwd: logPath})
// 生成logs目录 && 加载配置文件 end

// if (!config.dev) {
//   app.use(Log4js.koaLogger(Log4js.getLogger('http'), {level: 'auto'}))
// }

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  AutoRoutes.auto(app)

  app.use(ctx => {
    ctx.status = 200 // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve)
      ctx.res.on('finish', resolve)
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject)
      })
    })
  })

  app.listen(port, host)
  console.log('Server listening on http://' + host + ':' + port) // eslint-disable-line no-console
}

start()
