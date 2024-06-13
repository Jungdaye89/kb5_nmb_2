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
                    <tr v-for="item in sortedData" :key="item.id">
                        <td>{{ formatDate(item.date) }}</td>
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
import { defineProps, computed } from "vue";
import moment from "moment";
import "moment/locale/ko"; // 한국어 로케일 불러오기

moment.locale("ko"); // 로케일 설정을 한국어로 변경

const props = defineProps({
    filteredData: {
        type: Array,
        required: true,
    },
});

// 날짜를 원하는 형식으로 변환하는 함수
const formatDate = (date) => {
    return moment(date).format("YYYY년 M월 D일 dddd h시 mm분");
};

// 날짜를 Date 객체로 변환하는 함수
const convertToDate = (dateString) => {
    return moment(dateString, "YYYY.MM.DD HH:mm").toDate();
};

// 데이터 배열의 각 객체의 날짜를 Date 객체로 변환
props.filteredData.forEach((item) => {
    item.date = convertToDate(item.date);
});

// 날짜를 기준으로 객체를 정렬하는 비교 함수
const sortByDate = (a, b) => {
    return a.date - b.date; // 오름차순 정렬
};

// 정렬된 데이터
const sortedData = computed(() => {
    return props.filteredData.sort(sortByDate);
});
</script>
