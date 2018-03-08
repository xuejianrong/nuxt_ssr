const router = require('koa-router')()
router.get('/index', async function (ctx, next) {
  ctx.body = [
    {
      name:'index2', age: '29'
    },
    {
      name:'yihang', age: '18'
    }
  ]
})
module.exports = router
