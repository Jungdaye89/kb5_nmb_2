<template>
  <div id="home">
    <div class="square-container">
      <div class="circle" v-for="(text, index) in texts" :key="index">
        <span class="circle-text">{{ text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      texts: ['거래내역', '월별 요약', '가계부 쓰기'],
    };
  },
};
</script>

<style scoped>
#home {
  display: flex;
  justify-content: center;
  align-items: flex-start; /* align-items: center; => flex-start 로 변경 */
  padding-top: 50px; /* 중앙 배치에서 상단 여백을 추가 */
  height: 100vh;
  background-color: #f5f5f5; /* 배경색 */
}

.square-container {
  display: flex;
  justify-content: space-around; /* 정사각형들을 일정한 간격으로 배치 */
  width: 100%;
  max-width: 600px; /* 컨테이너의 최대 너비 설정 */
  margin: 0 auto; /* 가운데 정렬 */
}

/* 클래스 이름과 스타일 변경 */
.circle {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: #fbda6b; /* 원의 색상 */
  margin: 10px; /* 원 간의 간격 */
  border-radius: 50%; /* 원형으로 변경 */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff; /* 텍스트 색상 */
  font-weight: bold; /* 텍스트 굵기 */
}

.circle-text {
  position: absolute; /* 절대 위치 */
  top: 50%; /* 상단 여백 */
  left: 50%; /* 좌측 여백 */
  transform: translate(-50%, -50%); /* 가운데 정렬 */
}
</style>
