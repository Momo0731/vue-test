var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  ssoAPI: 'http://10.66.1.43:9080/sso',
  projectAPI: 'http://10.66.1.167:8087/freight-web', //'http://172.20.16.27:8080/auto-web',
  dzyAPI: 'http://10.66.1.167:8081/shipping-web/system/index',
  gis: 'http://10.66.1.167:8084/gis'
})
