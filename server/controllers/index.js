const router = require('koa-router')();

router.get('/index', async (ctx, next) => {
  ctx.body = [
    {
      name: 'index', age: '29',
    },
    {
      name: 'yihang', age: '18',
    }
  ];
});
module.exports = router;
