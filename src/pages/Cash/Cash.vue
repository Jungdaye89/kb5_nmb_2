<template>
  <div class="container">
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
        <tr
          v-for="item in sortedData"
          :key="item.no"
          @click="router.push(`/Cash/${item.no}`)"
        >
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
  <div class="container">
    <div class="row">
      <button @click="addDataHandler">추가하기</button>
    </div>
    <div class="row">
      <table>
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
          <td><input type="text" v-model="dataItem.date" /></td>
          <td><input type="text" v-model="dataItem.content" /></td>
          <td><input type="text" v-model="dataItem.expense" /></td>
          <td><input type="text" v-model="dataItem.import" /></td>
          <td><input type="text" v-model="dataItem.balance" /></td>
          <td><input type="text" v-model="dataItem.category" /></td>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from "@/stores/db.js";
import { ref, computed } from "vue";
import moment from "moment";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();

console.log(route.fullPath);

const datastore = useDataStore();
const { data, addData } = datastore;

// 데이터 배열의 각 객체의 날짜를 Date 객체로 변환
const convertToDate = (dateString) => {
  return moment(dateString, "YYYY.MM.DD HH:mm").toDate();
};

data.forEach((item) => {
  item.date = convertToDate(item.date);
});

// 날짜를 기준으로 객체를 정렬하는 비교 함수
const sortByDate = (a, b) => {
  return a.date - b.date; // 오름차순 정렬
  // return b.date - a.date; // 내림차순 정렬
};

// 정렬된 데이터
const sortedData = computed(() => {
  return data.sort(sortByDate);
});

const dataItem = reactive({
  content: "",
  income: "",
  expense: "",
  category: "",
  date: "",
});
const addDataHandler = () => {
  let { data } = dataItem;
  if (!dataItem.content || dataItem.content.trim() === "") {
    alert("내용을 입력해주세요!");
    return;
  }
  if (!dataItem.expense && !dataItem.income) {
    alert("금액을 입력해주세요!");
    return;
  }
  if (!dataItem.category) {
    alert("카테고리를 선택해주세요!");
    return;
  }
  dataItem.date = convertToDate(dataItem.date);
  addData({ ...dataItem }, () => {
    router.push("/Cash");
  });
};
</script>
