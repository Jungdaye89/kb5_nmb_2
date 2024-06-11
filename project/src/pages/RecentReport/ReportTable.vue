<template>
    <nav class="container">
        <div class="card card-head bg-light">
            <table class="table">
                <thead>
                    <tr>
                        <th>거래일시</th>
                        <th>기재내용</th>
                        <th>지출</th>
                        <th>수입</th>
                        <th>잔액</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in filteredData">
                        <td>{{ item.date }}</td>
                        <td>{{ item.content }}</td>
                        <td>{{ item.expense }}</td>
                        <td>{{ item.income }}</td>
                        <td>{{ item.balance }}</td>
                        <td>{{ item.category }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </nav>
</template>
<script setup>
import { useDataStore } from "@/stores/db.js";
import { ref, computed } from "vue";
import moment from "moment";

const props = defineProps({
    filteredData: {
        type: Array,
        required: true,
    },
});

const convertToDate = (dateString) => {
    return moment(dateString, "YYYY.MM.DD HH:mm").toDate(); // monent.js사용, 날짜 객체에서 월 데이터 따로 추출
};

// 데이터 배열의 각 객체의 날짜를 Date 객체로 변환
props.filteredData.forEach((item) => {
    item.date = convertToDate(item.date);
});

// 날짜를 기준으로 객체를 정렬하는 비교 함수
const sortByDate = (a, b) => {
    return a.date - b.date; // 오름차순 정렬
    // return b.date - a.date; // 내림차순 정렬
};

// 정렬된 데이터
const sortedData = computed(() => {
    return props.filteredData.sort(sortByDate);
});
</script>
