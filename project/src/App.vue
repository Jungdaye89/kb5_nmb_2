<script setup>
import CashDetail from "@/pages/Cash/CashDetail.vue";
import Cash from "@/pages/Cash/Cash.vue";
import { useDataStore } from "@/stores/db.js";
import { computed, onMounted, onUpdated } from "vue";
import { RouterLink, RouterView } from "vue-router";
import Home from "@/pages/Home.vue";
import Header from "@/components/Header.vue";
import MonthlyReport from "@/pages/MonthlyReport/MonthlyReport.vue";

// 데이터 불러오기
const dataStore = useDataStore();
const requestAPI = dataStore.requestAPI;

requestAPI();

// 추가 버튼
import { useRouter } from "vue-router";
const router = useRouter();
const addHandler = () => {
  router.push("/Cash");
};

// Button css
const $bg = "#fff";
const $text = "#382b22";
const $lightPink = "#fff0f0";
const $pink = "#ffe9e9";
const $darkPink = "#f9c4d2";
const $pinkBorder = "#b18597";
const $pinkShadow = "#ffe3e2";
</script>

<template>
  <div class="container">
    <router-view></router-view>
  </div>

  <button class="fastbutton" @click="addHandler">가계부</button>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Rubik:700&display=swap");

.page-container {
  font-family: "Rubik", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  min-height: 100vh;
  background: #fff;
}

button.fastbutton {
  position: fixed;
  bottom: 5%;
  right: 5%;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  font-weight: 600;
  color: #382b22;
  text-transform: uppercase;
  padding: 0.3em;
  background: #fbda6b; /* Top color */
  border: 2px solid #776c60; /* Border color */
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.fastbutton::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #ffc000; /* Bottom color */
  border-radius: inherit;
  box-shadow: 0 0 0 2px #776c60, 0 0.625em 0 0 #ffe8a2; /* Shadow color */
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1),
    box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}

button.fastbutton:hover {
  background: #ffc000;
  transform: translate(0, 0.25em);
}

button.fastbutton:hover::before {
  box-shadow: 0 0 0 2px #776c60, 0 0.5em 0 0 #ffc000;
  transform: translate3d(0, 0.5em, -1em);
}

button.fastbutton:active {
  background: #ffc000;
  transform: translate(0em, 0.75em);
}

button.fastbutton:active::before {
  box-shadow: 0 0 0 2px #776c60, 0 0 #ffc000;
  transform: translate3d(0, 0, -1em);
}
</style>
