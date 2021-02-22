export const menuRouter = [
  {
    title: '组织架构',
    key: 'setting',
    routes: [
      {
        title: '个人管理',
        key: 'personal',
        path: '/privilege/personal',
      },
      {
        title: '人员管理',
        key: 'adminManage',
        path: '/privilege/adminManage',
      },
      {
        title: '角色管理',
        key: 'roleManage',
        path: '/privilege/roleManage',
      },
      {
        title: '店铺管理',
        key: 'shop',
        path: '/goods/shop',
      },
    ],
  },
  {
    title: '商铺管理',
    key: 'shop',
    routes: [
      {
        title: '用户评论管理',
        key: 'userComment',
        path: '/goods/comment',
      },
      {
        title: '店内用户管理',
        key: 'userManage',
        path: '/order/userManage',
      },
      {
        title: '物品管理',
        key: 'goods',
        path: '/goods/shopGoods',
      },
      {
        title: '店铺广告',
        key: 'advertise',
        path: '/order/advertise',
      },
    ],
  },
  {
    title: '店铺活动',
    key: 'shopActivity',
    routes: [
      {
        title: '优惠活动',
        key: 'coupon',
        path: '/goods/coupon',
      },
      {
        title: '团购活动',
        key: 'shopActivity',
        path: '/goods/shopActivity',
      },
      {
        title: '分享活动',
        key: 'shopShare',
        path: '/order/share',
      },
    ],
  },
  {
    title: '订单处理',
    key: 'order',
    routes: [
      {
        title: '从订单跳转过来,订单支付',
        key: 'paymentPay',
        path: '/paymentPay',
      },
      {
        title: '售后服务',
        key: 'aftersale',
        path: '/order/aftersale',
      },
      {
        title: '区域地址',
        key: 'address',
        path: '/order/address',
      },
    ],
  },
  {
    title: '其他设置',
    key: 'else',
    routes: [
      {
        title: '日志查询',
        key: 'log',
        path: '/log',
      },
      {
        title: '浏览记录',
        key: 'footprint',
        path: '/footprint',
      },
    ],
  },
];

export const privilegePrefix =
  process.env.NODE_ENV == 'production'
    ? 'http://localhost:8080/privilege/'
    : '/api';

export const nologRoutes = ['/login', '/register', '/404'];
