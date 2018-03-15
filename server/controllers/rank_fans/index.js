import services from '../../../helper/services';

const router = require('koa-router')();

router.get('/', async (ctx, next) => {
  const resp = await services.app.get_fan_contrib();
  ctx.body = resp.data;
});
module.exports = router;
