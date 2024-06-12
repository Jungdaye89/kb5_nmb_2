<template>
  <div id="home" class="homecon container text-center py-5">
    <div class="d-flex justify-content-around mb-4">
      <!-- 각 동그라미에 텍스트 추가 -->
      <div
        class="d-flex justify-content-center align-items-center rounded-circle circle"
        v-for="(text, index) in circleTexts"
        :key="index"
        @mouseover="onHover(index)"
        @mouseleave="onLeave"
      >
        <router-link to="#" class="text-decoration-none text-dark">
          {{ text }}
        </router-link>
      </div>
    </div>
    <!-- 이미지 컨테이너 및 이미지 -->
    <div class="image-container">
      <img src="./path/to/your/image.jpg" alt="Image" class="img-fluid" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      // 각 동그라미에 표시될 텍스트 배열
      circleTexts: ['거래내역', '월별요약', '가계부 쓰기'],
      hoveredCircleIndex: null, // 호버된 동그라미의 인덱스를 추적
    };
  },
  methods: {
    // 호버된 동그라미의 인덱스를 저장하는 메서드
    onHover(index) {
      this.hoveredCircleIndex = index;
    },
    // 호버가 해제될 때 인덱스를 초기화하는 메서드
    onLeave() {
      this.hoveredCircleIndex = null;
    },
  },
};
</script>
<style scoped>
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
}
.homecon {
  background-color: white;
}
</style>
