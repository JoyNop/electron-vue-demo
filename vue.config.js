/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-04 17:33:37
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-05 15:00:34
 * @Description: file content
 * @FilePath: /electron-vue-demo/vue.config.js
 */

const path = require('path');

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  // publicPath: './',
  // devServer: {
  //   // can be overwritten by process.env.HOST
  //   host: '0.0.0.0',
  //   port: 8080
  // },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          'primary-color': '#4268b9',
          'link-color': '#4268b9',
          'border-radius-base': '2px'
        },
        javascriptEnabled: true
      }
    }
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('src', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'));

      config.plugin("html").tap(args => {
        args[0].title = "HR.IM Client";
        return args;
      });
  }
};
