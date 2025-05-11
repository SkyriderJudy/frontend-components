// stores/useAuthStore.ts
import { defineStore } from 'pinia';
import { ref } from 'vue';

interface AuthState {
  token: string | null;
}

export const useAuthStore = defineStore('auth', () => {
  // 状态使用 ref 显式管理
  const auth = ref<AuthState>({
    token: localStorage.getItem('token') || null
  });

  // ====== 核心方法 ======
  function setToken(token: string) {
    auth.value.token = token;
    localStorage.setItem('token', token);
  }

  function removeToken() {
    auth.value.token = null;
    localStorage.removeItem('token');
  }

  function getToken(): string | null {
    return auth.value.token;
  }

  function refreshToken(newToken: string) {
    auth.value.token = newToken;
    localStorage.setItem('token', newToken);
  }

  return {
    auth,
    setToken,
    removeToken,
    getToken,
    refreshToken
  };
});
