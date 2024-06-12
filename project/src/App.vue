<script setup>
import {
  RouterLink,
  RouterView,
} from 'vue-router';
import Header from '@/components/Header.vue';
</script>

<template>
  <div class="container">
    <Header></Header>
    <RecentReport />
    <router-view></router-view>
  </div>
</template>
