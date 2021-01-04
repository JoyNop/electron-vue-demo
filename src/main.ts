/*
 * @Author: HanRui(JoyNop)
 * @Date: 2021-01-04 14:41:01
 * @LastEditors: HanRui(JoyNop)
 * @LastEditTime: 2021-01-04 17:31:54
 * @Description: file content
 * @FilePath: /electron-vue-demo/src/main.ts
 */
import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.less'

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Antd);
app.mount('#app');
