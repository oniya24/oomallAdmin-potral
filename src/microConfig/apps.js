/**注册微应用
 * 这里注册vue-app 和 react-app
 */
import store from './redux';

// 注册信息主要包含以下内容
// 不重复名称 入口(在哪拉文件) container(??) activeRule(匹配到浏览器的URL)
const AppsInfo = [
  {
    name: 'privilege', // app name registered
    // entry: 'http://oomalladmin.privilege.finetoo.top/',
    entry:
      process.env.NODE_ENV == 'production'
        ? 'http://oomalladmin.privilege.finetoo.top/'
        : 'http://localhost:8001',
    container: '#app-qiankun',
    activeRule: '/privilege',
  },
  {
    name: 'goods', // app name registered
    // entry: '//oomallAdmin.micro.finetoo.top/goods',
    entry:
      process.env.NODE_ENV == 'production'
        ? 'http://oomalladmin.goods.finetoo.top/'
        : 'http://localhost:8002',
    container: '#app-qiankun',
    activeRule: '/goods',
  },
  {
    name: 'order', // app name registered
    // entry: '//oomallAdmin.micro.finetoo.top/goods',
    entry:
      process.env.NODE_ENV == 'production'
        ? 'http://oomalladmin.order.finetoo.top/'
        : 'http://localhost:8003',
    container: '#app-qiankun',
    activeRule: '/order',
  },
];

const microApps = AppsInfo.map((item) => {
  return {
    ...item,
    props: {
      store,
      activeRule: item.activeRule,
    },
  };
});

export default microApps;
