import { defineConfig } from 'umi';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // qiankun: {
  //   master: {
  //     // 注册子应用信息
  //     apps: microApps
  //   },
  // },
  proxy: {
    '/api': {
      target: 'http://localhost:8080/privilege/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    },
  },
  fastRefresh: {},
});
