import { defineStore } from "pinia";
import { reactive, computed } from "vue";
import moment from "moment";
import axios from "axios";

export const useDataStore = defineStore("data", () => {
  const url = "/api/data";
  const state = reactive({ data: [] });

  // 데이터 정의
  const requestAPI = async () => {
    try {
      const response = await axios.get(url);
      if (response.status === 200) {
        state.data = response.data;
      } else {
        alert("데이터 조회 실패");
      }
    } catch (e) {
      alert("오류 발생 !:" + e);
    }
  };

  // 데이터 추가 함수 정의
  const addData = async (
    { date, content, expense, income, balance, category },
    successCallback
  ) => {
    try {
      const payload = { date, content, expense, income, balance, category };
      const response = await axios.post(url + `/`, payload);
      if (response.status === 201) {
        requestAPI();
        successCallback();
      } else {
        alert("추가 실패");
      }
    } catch (e) {
      alert("에러 발생 : " + e);
    }
  };

  // 데이터 삭제 함수 정의
  const deleteData = async (date) => {
    try {
      const response = await axios.delete(url + `/${date}`);
      if (response.status === 200) {
        let index = state.data.findIndex((content) => content.date === date);
        state.data.splice(index, 1);
      } else {
        alert("Todo 삭제 실패");
      }
    } catch (e) {
      alert("에러발생 :" + e);
    }
  };

  // 데이터 수정 함수 정의
  const renewData = (date, content, expense, income, balance, category) => {
    let index = state.data.findIndex((content) => content.date === date);
    state.data[index] = {
      date,
      content,
      expense,
      income,
      balance,
      category,
    };
  };
  const data = computed(() => state.data);
  return { data, addData, deleteData, renewData, requestAPI };
});
