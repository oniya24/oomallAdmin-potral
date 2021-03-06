import {
  Effect,
  ImmerReducer,
  Reducer,
  Subscription,
  history,
  dispatch,
} from 'umi';
import { loginAdminReq } from '@/service/User';
import { message } from 'antd';
import { isErrnoEqual0, isCodeEqualOk } from '@/utils/validate';

export const mapStateToProps = (props) => {
  const { Login, loading } = props;
  return {
    loginLoading: loading.effects['Login/login'],
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    login: (payload) => dispatch({ type: 'Login/login', payload }),
  };
};

export default {
  namespace: 'Login',
  state: {
    // name: '123456',
  },
  effects: {
    *login({ payload }, { call, put }) {
      const res = yield call(loginAdminReq, payload);
      const { errno, data } = res;
      if (isErrnoEqual0(res) || isCodeEqualOk(res)) {
        localStorage.setItem('authorization', data);
        message.success('登录成功');
        sessionStorage.removeItem('adminInfo');
        history.push('/privilege/personal');
      }
    },
  },
  reducers: {
    // save(state, action) {
    //   return {
    //     ...state,
    //     ...action.payload,
    //   };
    // },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  //   subscriptions: {
  //     setup({ dispatch, history }) {
  //       return history.listen(({ pathname }) => {
  //         if (pathname === '/') {
  //           dispatch({
  //             type: 'query',
  //           })
  //         }
  //       });
  //     }
  //   }
};
