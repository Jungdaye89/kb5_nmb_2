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
</script>

<template>
    <div class="container">
        <Header></Header>
        <router-view></router-view>
        <RecentReport />
    </div>
</template>
