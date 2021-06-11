const router = require('koa-router')()
const users = require('../data/user')
const routers = require('../data/router')
router.post('/user_router_auth', async (ctx, next) => {
  const { uid } = ctx.request.body;
  if(uid) {
    let authRouterInfo = [];
    const userinfo = users.filter(user => user.id == uid)[0];
    console.log(userinfo);
    userinfo.auth.map(rid => {
      routers.map(router => {
        if(router.id === rid) {
          authRouterInfo.push(router)
        }
      })
    })

    ctx.body = authRouterInfo;
  }else {
    next()
  }
})



module.exports = router
