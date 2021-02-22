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
    title: '商内管理',
    key: 'shop',
    routes: [
      {
        title: '用户评论管理',
        key: 'userComment',
        path: '/goods/comment',
      },
      {
        title: '物品管理',
        key: 'goods',
        path: '/goods/shopGoods',
      },
      {
        title: '优惠活动',
        key: 'coupon',
        path: '/goods/coupon',
      },
      // {
      //   title: "区域地址",
      //   key: "address",
      //   path: "/address",
      // },
      {
        title: '店铺活动',
        key: 'shopActivity',
        path: '/goods/shopActivity',
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
        path: '/aftersale',
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
    : 'http://localhost:8081';

export const nologRoutes = ['/login', '/register', '/404'];
