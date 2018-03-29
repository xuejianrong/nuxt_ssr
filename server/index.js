const Log4js = require('koa-log4');
const Koa = require('koa');
const path = require('path');
const { Nuxt, Builder } = require('nuxt');

const LogConf = require('../config/log4');
const AutoRoutes = require('./autoRoutes');
const ip = require('ip');

const app = new Koa();
const isDev = !(app.env === 'production');
const host = process.env.HOST || (isDev ? ip.address() : '0.0.0.0');
const port = process.env.PORT || 3000;

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');

config.dev = !isDev;

Log4js.configure(LogConf);
// 生成logs目录 && 加载配置文件 end

if (!config.dev) {
  app.use(Log4js.koaLogger(Log4js.getLogger('http'), { level: 'auto' }));
}
// app.use(Log4js.koaLogger(Log4js.getLogger('http'), {level: 'auto'}))

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config);

  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  }
  AutoRoutes.auto(app);

  app.use(ctx => {
    ctx.status = 200; // koa defaults to 404 when it sees that status is unset

    return new Promise((resolve, reject) => {
      ctx.res.on('close', resolve);
      ctx.res.on('finish', resolve);
      nuxt.render(ctx.req, ctx.res, promise => {
        // nuxt.render passes a rejected promise into callback on error.
        promise.then(resolve).catch(reject);
      });
    });
  });

  app.listen(port, host);
  console.log(`Server listening on http://${host}:${port}`); // eslint-disable-line no-console
}

start();
