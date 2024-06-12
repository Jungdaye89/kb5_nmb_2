<!-- <template>
    <nav class="container">
        <div class="card card-body bg-ligth">
            <div>
                <label>카테고리</label>
                <select v-model="category" @change="handleCategoryChange" class="card card-head bg-ligth">
                    <optgroup label="지출">
                        <option>식비</option>
                        <option>교통</option>
                        <option>공과금</option>
                        <option>의료</option>
                        <option>경조사</option>
                        <option>금융</option>
                        <option>여가</option>
                    </optgroup>
                    <optgroup label="수입">
                        <option>봉급</option>
                        <option>금융</option>
                        <option>용돈</option>
                        <option>기타</option>
                    </optgroup>
                </select>
            </div>
            <div>
                <label>조회기간</label>
                <select v-model="date" @change="handleDateChange" class="card card-head bg-light">
                    <option>5월</option>
                    <option>6월</option>
                </select>
            </div>
        </div>
    </nav>
    <reportTable :filteredData="filteredData" />
</template>

<script setup>
import { defineStore } from "pinia"; // pinia를 가져옵니다.
import { useDataStore } from "@/stores/db.js"; // useDataStore를 가져옵니다.
import reportTable from "@/pages/RecentReport/ReportTable.vue";
import { ref, reactive } from "vue"; // Vue의 ref를 가져옵니다.

const datastore = useDataStore();
const { data } = datastore;

const category = ref("");
const date = ref("");

const filteredData = ref([]); // filteredData를 ref로 선언합니다
const handleCategoryChange = () => {
    filteredData.value = data.filter((item) => item.category === category.value); // 여기서 filteredData를 바로 업데이트합니다.
};

const filteredMonth = ref([]); // filteredMonth를 ref로 선언.
const handleDateChange = () => {
    filteredMonth.value = data.filter((item) => item.date === date.value);
};
</script> -->

<template>
    <nav class="container">
        <div class="card card-body bg-light">
            <div>
                <label>카테고리</label>
                <select v-model="category" @change="filterData" class="card card-head bg-light">
                    <optgroup label="지출">
                        <option>식비</option>
                        <option>교통</option>
                        <option>공과금</option>
                        <option>의료</option>
                        <option>경조사</option>
                        <option>금융</option>
                        <option>여가</option>
                    </optgroup>
                    <optgroup label="수입">
                        <option>봉급</option>
                        <option>금융</option>
                        <option>용돈</option>
                        <option>기타</option>
                    </optgroup>
                </select>
            </div>
            <div>
                <label>조회기간</label>
                <select v-model="date" @change="filterData" class="card card-head bg-light">
                    <option>5월</option>
                    <option>6월</option>
                </select>
            </div>
        </div>
    </nav>
    <reportTable :filteredData="filteredData" />
</template>

<script setup>
import { ref, computed } from "vue";
import { useDataStore } from "@/stores/db.js";
import reportTable from "@/pages/RecentReport/ReportTable.vue";

const datastore = useDataStore();
const { data } = datastore;

const category = ref("");
const date = ref("");

const filteredData = computed(() => {
    return data.filter((item) => {
        const itemDate = new Date(item.date);
        const month = itemDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 필요
        const categoryMatch = category.value ? item.category === category.value : true;
        const dateMatch = date.value ? month === parseInt(date.value) : true;

        return categoryMatch && dateMatch;
    });
});

const filterData = () => {
    // This method is a placeholder to trigger computed property re-evaluation.
};
</script>

<style scoped>
.table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
}

th {
    background-color: #f2f2f2;
}
</style>
