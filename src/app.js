import { history, RequestConfig } from 'umi';
import startApp from '@/microConfig';
import { addAuth2Header } from './utilReq/requestInterceptor';
import { handleErrorMsg } from './utilReq/responseInterceptor';
import { message } from 'antd';
import { errorHandler } from './utilReq/errorHandler';
import { getUserReq } from '@/service/User';
import { privilegePrefix, nologRoutes } from '@/consts/router';
// import 'antd/dist/antd.css';

export function render(oldRender) {
  startApp();
  if (history.location.pathname === '/') {
    history.push('/login');
  }
  if (nologRoutes.indexOf(history.location.pathname) !== -1) {
    oldRender();
  } else {
    // 查看当前用户是否登录 如果未登录跳转到登录界面
    try {
      getUserReq()
        .then((val) => {
          oldRender();
        })
        .catch((error) => {
          message.info('请先登录');
          history.push('/login');
        });
    } catch (e) {
      message.info('请先登录');
      history.push('/login');
    }
  }
  oldRender();
}

export const request = {
  timeout: 5000,
  mode: 'cors',
  prefix: privilegePrefix,
  errorHandler,
  errorConfig: {
    adaptor: (resData) => {
      return {
        ...resData,
        success: resData.ok,
        errorMessage: resData.message,
      };
    },
  },
  requestInterceptors: [
    // addBaseUrl,
    addAuth2Header,
  ],
  responseInterceptors: [handleErrorMsg],
};
