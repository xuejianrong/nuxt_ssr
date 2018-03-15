const router = require('koa-router')();

router.get('/list', async (ctx, next) => {
  ctx.body = [
    {
      name: 'yipeng', age: '29'
    },
    {
      name: 'yihang', age: '18'
    },
  ];
});
router.get('/', async (ctx, next) => {
  ctx.body = {
    name: 'yipeng', age: '29',
  };
});
module.exports = router;
