import { request } from 'umi';

export const getUserReq = () => {
  return request(`adminusers`);
};

/** 登出系统 */
export const logoutUserReq = (params) => {
  return request(`privileges/logout`);
};

/** 登录系统 */
export const loginAdminReq = (params) => {
  return request('privileges/login', {
    method: 'post',
    data: params,
  });
};

export const registerAdmin = (params) => {
  return request('adminusers', {
    method: 'post',
    data: params,
  });
};
