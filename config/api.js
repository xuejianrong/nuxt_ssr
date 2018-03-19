const isDev = process.env.isDev;
module.exports = {
  apiPath: {
    local: {
      host: '/server', // 无协议头表示同域内请求
      getUserList: {
        method: 'get',
        url: '/user/list'
      },
      getRankFans: {
        method: 'get',
        url: '/rank_fans'
      }
    },
    /*
    * 客户端接口
    * */
    app: {
      // host需要写https，有可能是服务器之间互相请求，这个时候没有协议头会报404
      host: isDev ? 'http://ceshi.wxh5.nagezan.net' : 'https://api.h5.zb.nagezan.net',
      get_fan_contrib: {
        method: 'post',
        url: '/cgi-bin/get_fan_contrib'
      }
    },
    /*
    * 其他接口
    * */
    other: {
      host: isDev ? 'http://114.55.10.164:9060' : 'https://api.h5.zb.nagezan.net',
    },
  }
};
