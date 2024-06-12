<template>
    <div>
        <Bar :chart-data="chartData" :options="chartOptions" />
    </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { Bar, Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "vue-chartjs";
import { reactive } from "vue";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default defineComponent({
    name: "BarChart",
    props: {
        filteredData: {
            type: Array,
            required: true,
        },
    },
    extends: Bar,
    setup(props) {
        const chartData = computed(() => {
            const labels = props.filteredData.map((item) => item.category);
            const values = props.filteredData.map((item) => item.expense + item.income); // Assuming each item has 'expense' and 'income' properties

            return {
                labels,
                datasets: [
                    {
                        label: "Amount",
                        backgroundColor: "#42A5F5",
                        data: values,
                    },
                ],
            };
        });

        const chartOptions = reactive({
            responsive: true,
            maintainAspectRatio: false,
        });

        return {
            chartData,
            chartOptions,
        };
    },
});
</script>
