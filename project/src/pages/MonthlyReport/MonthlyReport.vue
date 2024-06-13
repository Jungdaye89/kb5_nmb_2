<!-- <template>
    <nav class="container">
        <div class="card card-head bg-light mt-4">
            <h4 class="titleStyle">월별 합계</h4>
            <table class="table table-bordered table-striped">
                <thead class="bg-brown text-light">
                    <tr>
                        <th>월</th>
                        <th>총 지출</th>
                        <th>총 수입</th>
                        <th>순이익</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(summary, month) in monthlySummary" :key="month">
                        <td>{{ month }}월</td>
                        <td>{{ summary.totalExpense.toLocaleString() }}원</td>
                        <td>{{ summary.totalIncome.toLocaleString() }}원</td>
                        <td>{{ summary.netProfit.toLocaleString() }}원</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "@/stores/db.js";

const datastore = useDataStore();
const { data } = datastore;

const monthlySummary = computed(() => {
    const summary = {};

    data.forEach((item) => {
        const itemDate = new Date(item.date);
        const month = itemDate.getMonth() + 1; // 1월은 0, 2월은 1, ... 따라서 +1 필요

        if (!summary[month]) {
            summary[month] = {
                totalExpense: 0,
                totalIncome: 0,
                netProfit: 0,
            };
        }

        summary[month].totalExpense += parseFloat(item.expense) || 0;
        summary[month].totalIncome += parseFloat(item.income) || 0;
        summary[month].netProfit = summary[month].totalIncome - summary[month].totalExpense;
    });

    return summary;
});
</script>

<style scoped>
.bg-brown {
    background-color: #795548; /* brown 색상 */
}
.text-light {
    color: #ffffff; /* 흰색 텍스트 */
}
.titleStyle {
    color: #776c60;
    font-size: 2em;
    font-family: sans-serif;
    text-align: center;
}
</style> -->

<template>
    <nav class="container">
        <div class="card card-head bg-light mt-4">
            <br />
            <h3 class="text-center text-brown">월별 합계</h3>
            <br />
            <table class="table table-bordered table-striped">
                <thead class="bg-brown text-light">
                    <tr>
                        <th>월</th>
                        <th>총 지출</th>
                        <th>총 수입</th>
                        <th>순이익</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(summary, month) in monthlySummary" :key="month">
                        <td>{{ month }}월</td>
                        <td>{{ summary.totalExpense.toLocaleString() }}원</td>
                        <td>{{ summary.totalIncome.toLocaleString() }}원</td>
                        <td>{{ summary.netProfit.toLocaleString() }}원</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </nav>
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "@/stores/db.js";

const datastore = useDataStore();
const { data } = datastore;

const monthlySummary = computed(() => {
    const summary = {};

    data.forEach((item) => {
        const itemDate = new Date(item.date);
        const month = itemDate.getMonth() + 1; // 1월은 0, 2월은 1, ... 따라서 +1 필요

        if (!summary[month]) {
            summary[month] = {
                totalExpense: 0,
                totalIncome: 0,
                netProfit: 0,
            };
        }

        summary[month].totalExpense += parseFloat(item.expense) || 0;
        summary[month].totalIncome += parseFloat(item.income) || 0;
        summary[month].netProfit = summary[month].totalIncome - summary[month].totalExpense;
    });

    return summary;
});
</script>

<style scoped>
.bg-brown {
    background-color: #8d6e63; /* brown 색상 */
}
.text-brown {
    color: #6d4c41; /* darker brown 텍스트 색상 */
}
.bg-brown th {
    background-color: #6d4c41 !important; /* brown 색상 */
    color: #ffffff;
}
.table-striped tbody tr:nth-of-type(odd) {
    background-color: #f5f5f5;
}
.table-bordered th,
.table-bordered td {
    border: 1px solid #6d4c41;
}
</style>
