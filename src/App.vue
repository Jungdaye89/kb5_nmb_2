<script setup>
import CashDetail from "@/pages/Cash/CashDetail.vue";
import Cash from "@/pages/Cash/Cash.vue";
import { useDataStore } from "@/stores/db.js";
import { computed, onMounted, onUpdated } from "vue";
import { RouterView, useRouter } from "vue-router";

// 데이터 불러오기
const dataStore = useDataStore();
const requestAPI = dataStore.requestAPI;

requestAPI();
const router = useRouter();
function goToCash() {
  return router.push(`/Cash`);
}
</script>

<template>
  <button @click="goToCash()">캐시</button>
  <RouterView></RouterView>
</template>
