<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Layout from './components/layout/index.vue'; // 假设你有布局组件
import Login from './components/login/login.vue';
import { useAuthStore } from '@/stores/useAuthStore';

const { auth } = useAuthStore();

const isShow = ref<boolean>(false);

onMounted(() => {
  if (auth.token) {
    isShow.value = true;
  } else {
    isShow.value = false;
  }
});
</script>

<template>
  <div class="app">
    <component :is="isShow ? Layout : Login" />
  </div>
</template>
<style scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
