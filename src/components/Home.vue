<template>
  <nav
    class="navbar navbar-expand-md mt-2 p-4"
    style="background-color: #ffc000"
  >
    <span class="navbar-brand"><b>H.A</b></span>
    <button
      class="navbar-toggler"
      type="button"
      @click="changeIsNavShow"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div :class="navClass">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/"
            >홈</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/RecentReport"
            >거래내역</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/MonthlyReport"
            >월별요약</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/Cash"
            >가계부 쓰기</router-link
          >
        </li>
      </ul>
      <img
        class="rounded"
        src="./data/KARINA.jpg"
        width="40"
        height="40"
      />
      <span class="navbar-text">
        <router-link
          class="nav-link"
          to="/Profile"
          >하승범 님</router-link
        >
      </span>
    </div>
  </nav>
</template>

<script setup>
import { reactive, computed } from 'vue';

const state = reactive({ isNavShow: false });
const navClass = computed(() =>
  state.isNavShow
    ? 'collapse navbar-collapse show'
    : 'collapse navbar-collapse'
);
const changeIsNavShow = () => {
  state.isNavShow = !state.isNavShow;
};
</script>

<style></style>
