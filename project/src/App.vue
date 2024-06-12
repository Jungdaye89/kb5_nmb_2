<script setup>
import { RouterLink, RouterView } from "vue-router";
import Home from '@/components/Home.vue';
import Header from "@/components/Header.vue";
</script>

<template>
    <div class="container">
        <Header></Header>
        <router-view></router-view>
        <RecentReport />
        <MonthlyReport></MonthlyReport>
        <Summary></Summary>
    </div>

</template>
