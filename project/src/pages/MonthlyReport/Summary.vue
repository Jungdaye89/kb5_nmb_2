<template>
    <div>
        <h2>전체</h2>
        <canvas id="myChart"></canvas>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import moment from "moment";

// props에서 필터링된 데이터 받기
const { filteredData } = props;

const convertToDate = (dateString) => {
    return moment(dateString, "YYYY.MM.DD HH:mm").toDate(); // monent.js사용, 날짜 객체에서 월 데이터 따로 추출
};

// 데이터 배열의 각 객체의 날짜를 Date 객체로 변환
filteredData.value.forEach((item) => {
    item.date = convertToDate(item.date);
});

// 날짜를 기준으로 객체를 정렬하는 비교 함수
const sortByDate = (a, b) => {
    return a.date - b.date; // 오름차순 정렬
    // return b.date - a.date; // 내림차순 정렬
};

// 차트 그리기
onMounted(() => {
    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: filteredData.value.map((item) => item.date), // 날짜를 레이블로 사용
            datasets: [
                {
                    label: "월말 결산",
                    data: filteredData.value.map((item) => item.balance), // 잔액을 데이터로 사용
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
});
</script>

<script>
import Chart from "chart.js/auto";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);
</script>
