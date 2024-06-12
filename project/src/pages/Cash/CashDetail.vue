<template>
  <div class="container">
    <div class="row mt-3 form-group">
      <span>날짜 : </span>
      <input type="text" class="form-control" id="date" :placeholder="dataItem.date" v-model="dataItem.date"/></br>
    </div>
    <div class="row mt-3 justify-content-start form-group" >
      <div class="col"><label> 수입/지출 : </label></div>
      <div class="col ">
        <input type="radio" name="income_expense" value="income" v-model="selectedType">
        수입
      </div>
      <div class="col">
        <input type="radio" name="income_expense" value="expense" v-model="selectedType">
        지출
      </div>
    </div>
    <div class="row mt-3 form-group">
      <label>내용 :</label>
      <input type="text" class="form-control" id="content" :placeholder="dataItem.content" v-model="dataItem.content"/>
    </div>
    <div class="row mt-3 form-group">
      <label>금액 :</label>
      <input type="text" class="form-control" id="amount" :placeholder="dataItem.income"
        v-if="selectedType === 'income'" v-model="dataItem.income">
      <input type="text" class="form-control" id="amount" :placeholder="dataItem.expense"
        v-else-if="selectedType === 'expense'" v-model="dataItem.expense">
    </div>
    <div class="row mt-3 form-group">
      <label>카테고리</label>
      <select v-model="dataItem.category">
        <optgroup v-if="selectedType === 'expense'">
            <option>식비</option>
            <option>교통</option>
            <option>공과금</option>
            <option>의료</option>
            <option>경조사</option>
            <option>금융</option>
            <option>여가</option>
        </optgroup>
        <optgroup v-else-if="selectedType === 'income'">
            <option>봉급</option>
            <option>금융</option>
            <option>용돈</option>
            <option>기타</option>
        </optgroup>
      </select>
    </div>
    <div class="container mt-3">
      <button @click="updateHandler()">수정</button>
      <button @click="deleteData(data.id)">삭제</button>
    </div>
  </div>
</template>
<script setup>
import { useDataStore } from '@/stores/db.js';
import { ref, computed, reactive} from "vue";
import {useRouter, useRoute } from 'vue-router';
import moment from "moment";


const convertToDate = (dateString) => {
  return moment(dateString, "YYYY.MM.DD HH:mm").toDate();
};


// 데이터 불러오기
const datastore = useDataStore();
const {data, deleteData, renewData} = datastore;

// 특정 데이터 불러오기 위한 currentRoute 선언
const currentRoute = useRoute();
const router = useRouter()

// 수입 지출 구분을 위한 변수 selectedType 선언
const selectedType = ref('income');

// data id로 수정할 데이터 찾기
const dataItemIndex = data.find(
  (item)=> item.id === currentRoute.params.id
);
const dataItem = reactive({ ...dataItemIndex });
console.log(dataItem)

const updateHandler = () => {
  if (!dataItem.content || dataItem.content.trim() === "") {
    alert("내용을 입력해주세요!");
    return;
  }
  if (!dataItem.expense && !dataItem.income) {
    alert("금액을 입력해주세요!");
    return;
  }
  if (isNaN(dataItem.expense) || isNaN(dataItem.income)) {
    // 변경된 부분
    alert("금액은 숫자로 입력해주세요!"); // 변경된 부분
    return;
  }
  if (!dataItem.category) {
    alert("카테고리를 선택해주세요!");
    return;
  }
  renewData({ ...dataItem }, () => {
    router.push("/Cash");
  });
};

</script>

