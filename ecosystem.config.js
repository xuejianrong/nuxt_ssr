module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : 'nuxt_ssr',
      script    : 'server/index',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {
        NODE_ENV: 'production'
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : 'admin',
      host : '118.178.133.200',
      ref  : 'origin/master',
      repo : 'git@github.com:xuejianrong/nuxt_ssr.git',
      path : '/home/admin/nuxt_pt/nuxt_ssr/production',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env production'
    },
    dev : {
      user : 'admin',
      host : '118.178.133.200',
      ref  : 'origin/master',
      repo : 'git@github.com:xuejianrong/nuxt_ssr.git',
      path : '/home/admin/nuxt_pt/nuxt_ssr/development',
      'post-deploy' : 'yarn install && pm2 reload ecosystem.config.js --env dev',
      env  : {
        NODE_ENV: 'dev'
      }
    }
  }
};
