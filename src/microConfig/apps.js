/**注册微应用
 * 这里注册vue-app 和 react-app
 */
import store from './redux';

// 注册信息主要包含以下内容
// 不重复名称 入口(在哪拉文件) container(??) activeRule(匹配到浏览器的URL)
const AppsInfo = [
  {
    name: 'privilege', // app name registered
    entry: 'http://oomalladmin.privilege.finetoo.top/',
    container: '#app-qiankun',
    activeRule: '/privilege',
  },
  {
    name: 'goods', // app name registered
    // entry: '//oomallAdmin.micro.finetoo.top/goods',
    entry: 'http://oomalladmin.goods.finetoo.top/',
    container: '#app-qiankun',
    activeRule: '/goods',
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
