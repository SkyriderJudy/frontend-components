import request from '../../utils/fetch';
import type { FormState } from './authType';

export const useAuthService = () => {
  const login = (param: FormState) => {
    if (param.username === 'admin' && param.password === '123456') {
      // return request({ url: '/login', method: 'POST', data: param });
      return Promise.resolve({
        code: 200,
        data: {
          token: '1234567890'
        }
      });
    } else {
      return Promise.reject(new Error('用户名或密码错误'));
    }
  };

  const getUserInfo = () => {};

  const logout = () => {};

  return {
    login,
    logout,
    getUserInfo
  };
};
