<template>
  <div id="header">
    <nav
      class="navbar navbar-expand-md mt-2 p-4"
      style="background-color: #ffc000"
    >
      <span class="navbar-brand"><b>H.A</b></span>
      <div
        :class="navClass"
        class="ms-auto d-flex align-items-center"
      >
        <img
          class="rounded"
          src="../components/data/KARINA.jpg"
          width="40"
          height="40"
        />
        <span class="navbar-text">
          <router-link
            class="nav-link"
            to="/Profile"
            >&nbsp&nbsp하승범 님
            환영합니다.</router-link
          >
        </span>
      </div>
    </nav>
  </div>
  <div
    id="home"
    class="homecon container text-center py-5"
  >
    <!-- 동그라미 컨테이너 -->
    <div
      class="d-flex justify-content-around mb-5"
    >
      <!-- 각 동그라미에 텍스트 추가 -->
      <div
        class="d-flex justify-content-center align-items-center rounded-circle circle"
        @mouseover="onHover(index)"
        @mouseleave="onLeave"
      >
        <router-link
          to="/RecentReport"
          class="text-decoration-none text-dark"
        >
          거래내역
        </router-link>
      </div>
      <div
        class="d-flex justify-content-center align-items-center rounded-circle circle"
        @mouseover="onHover(index)"
        @mouseleave="onLeave"
      >
        <router-link
          to="/MonthlyReport"
          class="text-decoration-none text-dark"
        >
          월별요약
        </router-link>
      </div>
      <div
        class="d-flex justify-content-center align-items-center rounded-circle circle"
        @mouseover="onHover(index)"
        @mouseleave="onLeave"
      >
        <router-link
          to="/Cash"
          class="text-decoration-none text-dark"
        >
          가계부 쓰기
        </router-link>
      </div>
    </div>
    <!-- 구분선 추가 -->
    <div class="separator mt-5"></div>
    <!-- 카드 섹션 추가 -->
    <div
      class="d-flex justify-content-around flex-wrap my-4 mt-5"
    >
      <!-- 총 수입 카드 -->
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">총 수입</h5>
          <p class="card-text">
            {{
              formatCurrency(summary.totalIncome)
            }}
          </p>
        </div>
      </div>
      <!-- 총 지출 카드 -->
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">총 지출</h5>
          <p class="card-text">
            {{
              formatCurrency(summary.totalExpense)
            }}
          </p>
        </div>
      </div>
      <!-- 순이익 카드 -->
      <div class="card summary-card">
        <div class="card-body">
          <h5 class="card-title">순이익</h5>
          <p class="card-text">
            {{
              formatCurrency(summary.netProfit)
            }}
          </p>
        </div>
      </div>
    </div>
    <!-- 월별 합계 및 차트 -->
    <!-- 테이블 -->
    <div class="card card-head bg-light mt-5">
      <br />
      <h3 class="text-center text-brown">
        월별 합계
      </h3>
      <br />
      <div class="table-container">
        <table
          class="table table-bordered table-striped table-md"
        >
          <thead class="bg-brown text-light">
            <tr>
              <th>월</th>
              <th>총 지출</th>
              <th>총 수입</th>
              <th>순이익</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(
                summary, month
              ) in monthlySummary"
              :key="month"
            >
              <td>{{ month }}월</td>
              <td>
                {{
                  summary.totalExpense.toLocaleString()
                }}원
              </td>
              <td>
                {{
                  summary.totalIncome.toLocaleString()
                }}원
              </td>
              <td>
                {{
                  summary.netProfit.toLocaleString()
                }}원
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDataStore } from '@/stores/db.js';
import {
  ref,
  computed,
  reactive,
  onMounted,
  watch,
} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import moment from 'moment';
import Chart from 'chart.js/auto';

const dataStore = useDataStore();
const addData = dataStore.addData;
const router = useRouter();
const route = useRoute();

const convertToDate = (dateString) => {
  return moment(
    dateString,
    'YYYY.MM.DD HH:mm'
  ).toDate();
};

const sortByDate = (a, b) => {
  return a.date - b.date; // 오름차순 정렬
};

const sortedData = ref([]);

const summary = reactive({
  totalExpense: 0,
  totalIncome: 0,
  netProfit: 0,
});

onMounted(async () => {
  await dataStore.requestAPI();
  sortedData.value = dataStore.data
    .map((item) => ({
      ...item,
      date: convertToDate(item.date),
    }))
    .sort(sortByDate);
});

watch(
  () => sortedData.value,
  (newValue) => {
    summary.totalExpense = 0;
    summary.totalIncome = 0;
    newValue.forEach((item) => {
      summary.totalExpense +=
        parseInt(item.expense) || 0;
      summary.totalIncome +=
        parseInt(item.income) || 0;
    });
    summary.netProfit =
      summary.totalIncome - summary.totalExpense;
    console.log(summary);
  },
  { immediate: true }
);

let hoveredCircleIndex = null;

const formatCurrency = (value) => {
  return value.toLocaleString('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  });
};

const onHover = (index) => {
  hoveredCircleIndex = index;
};

const onLeave = () => {
  hoveredCircleIndex = null;
};

// 월별 합계 계산
const monthlySummary = computed(() => {
  const summary = {};
  sortedData.value.forEach((item) => {
    const itemDate = new Date(item.date);
    const month = itemDate.getMonth() + 1; // 1월은 0, 2월은 1, ... 따라서 +1 필요
    if (!summary[month]) {
      summary[month] = {
        totalExpense: 0,
        totalIncome: 0,
        netProfit: 0,
      };
    }
    summary[month].totalExpense +=
      parseFloat(item.expense) || 0;
    summary[month].totalIncome +=
      parseFloat(item.income) || 0;
    summary[month].netProfit =
      summary[month].totalIncome -
      summary[month].totalExpense;
  });
  return summary;
});

// 월별 총 지출 데이터 준비
const chartData = computed(() => {
  const labels = [];
  const expenses = [];
  for (let month in monthlySummary.value) {
    labels.push(`${month}월`);
    expenses.push(
      monthlySummary.value[month].totalExpense
    );
  }
  return {
    labels: labels,
    datasets: [
      {
        label: '총 지출',
        data: expenses,
        backgroundColor: [
          '#8D6E63', // brown 색상
          '#CD853F', // 토끼색
          '#A0522D', // 갈색
          '#D2691E', // 초콜릿색
          '#B8860B', // 금색
          '#8B4513', // 브라운
          '#A52A2A', // 갈색
          '#FF8C00', // 주황색
          '#DAA520', // 금색
          '#B8860B', // 금색
          '#006400', // 녹색
          '#556B2F', // 카키색
          '#8B4513', // 브라운
        ],
      },
    ],
  };
});

// 차트 그리기
onMounted(() => {
  const ctx = document.getElementById(
    'monthlyChart'
  );
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(
        monthlySummary.value
      ).map((month) => `${month}월`),
      datasets: [
        {
          label: '월별 총 지출',
          data: Object.values(
            monthlySummary.value
          ).map(
            (summary) => summary.totalExpense
          ),
          backgroundColor: [
            '#8D6E63',
            '#CD853F',
            '#A0522D',
            '#D2691E',
            '#B8860B',
            '#8B4513',
            '#A52A2A',
            '#FF8C00',
            '#DAA520',
            '#B8860B',
            '#006400',
            '#556B2F',
            '#8B4513',
          ],
        },
      ],
    },
  });
});
</script>

<style scoped>
/* 배경 스타일 */
.circle {
  width: 100px;
  height: 100px;
  background-color: #fbda6b;
  transition: background-color 0.3s;
  text-decoration: none; /* router-link의 기본 스타일 제거 */
  color: #776c60; /* 텍스트 색상 설정 */
  flex-shrink: 0;
}
.circle:hover {
  background-color: #ffc000; /* 호버 시 배경색 변경 */
}
.image-container {
  width: 100%;
  margin-top: 20px; /* 동그라미와 이미지 사이의 간격 조정 */
}
.homecon {
  background-color: white;
}
.separator {
  width: 100%;
  height: 2px;
  background-color: #ccc; /* 구분선 색상 */
  margin: 20px 0; /* 구분선 위아래 간격 조정 */
}
/* table style */
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
