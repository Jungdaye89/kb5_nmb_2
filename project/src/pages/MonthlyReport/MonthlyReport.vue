<template>
  <Header />
  <div class="container">
    <div class="card card-head bg-light mt-4">
      <br />
      <h3 class="text-center text-brown">
        월별 합계
      </h3>
      <br />
      <table
        class="table table-bordered table-striped"
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
    <div class="chart-container">
      <canvas id="netProfitChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useDataStore } from '@/stores/db.js';
import Chart from 'chart.js/auto';
import Header from '@/components/Header.vue';

const datastore = useDataStore();
const { data } = datastore;

const monthlySummary = computed(() => {
  const summary = {};

  data.forEach((item) => {
    const itemDate = new Date(item.date);
    const month = itemDate.getMonth() + 1;

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

onMounted(() => {
  renderChart();
});

const renderChart = () => {
  const ctx = document.getElementById(
    'netProfitChart'
  );

  const labels = Object.keys(
    monthlySummary.value
  ).map((month) => `${month}월`);
  const netProfits = Object.values(
    monthlySummary.value
  ).map((summary) => summary.netProfit);

  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [
        {
          label: '순이익',
          data: netProfits,
          backgroundColor: generateColors(
            netProfits.length
          ),
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              let label = context.label || '';
              if (label) {
                label += ': ';
              }
              if (context.parsed !== null) {
                label +=
                  context.parsed.toLocaleString() +
                  '원';
              }
              return label;
            },
          },
        },
      },
    },
  });
};

const generateColors = (length) => {
  const colors = [];
  const baseColors = ['#8d6e63', '#ffcc80'];

  for (let i = 0; i < length; i++) {
    colors.push(
      baseColors[i % baseColors.length]
    );
  }
  return colors;
};
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
.chart-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
canvas {
  max-width: 400px;
  max-height: 400px;
}
</style>
