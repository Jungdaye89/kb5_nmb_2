<template>
  <!-- TITLE  -->
  <div class="container mt-5 mb-3 border">
    <div class="row">
      <div class="col">
        <div class="titleStyle">
          <b>Profile</b>
        </div>
      </div>
    </div>
  </div>

  <!-- Form 작성 -->
  <div class="container">
    <div class="row">
      <div class="col">
        <form
          @submit.prevent="saveProfile"
          class="container mb-3 border"
        >
          <div class="mb-3 mt-3">
            <label for="name">이름</label>
            <input
              v-model="profile.name"
              type="text"
              class="form-control"
              id="name"
              name="name"
              placeholder="하승범"
            />
          </div>
          <div class="mb-3 mt-3">
            <label for="gender">성별</label>
            <br />
            <input
              v-model="profile.gender"
              type="radio"
              class="form-check-input me-2"
              id="male"
              value="male"
              name="gender"
              autocomplete="off"
              :checked="profile.gender === 'male'"
            />남자
            <input
              v-model="profile.gender"
              type="radio"
              class="form-check-input me-2"
              id="female"
              value="female"
              name="gender"
              :checked="
                profile.gender === 'female'
              "
            />여자
          </div>
          <div class="bir mb-3 mt-3">
            <label for="birthdate"
              >생년월일</label
            >
            <div class="d-flex">
              <div class="bir_yy flex-fill">
                <span>
                  <input
                    v-model="
                      profile.birthdate.year
                    "
                    type="text"
                    class="form-control"
                    id="yy"
                    placeholder="1998"
                    maxlength="4"
                  />
                </span>
              </div>
              <div class="bir_mm flex-fill">
                <span>
                  <select
                    v-model="
                      profile.birthdate.month
                    "
                    class="form-select"
                    id="mm"
                  >
                    <option
                      v-for="month in 12"
                      :key="month"
                    >
                      {{ month }}
                    </option>
                  </select>
                </span>
              </div>
              <div class="bir_dd flex-fill">
                <span>
                  <select
                    v-model="
                      profile.birthdate.day
                    "
                    class="form-select"
                    id="dd"
                  >
                    <option
                      v-for="day in 31"
                      :key="day"
                    >
                      {{ day }}
                    </option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3 mt-3">
            <label for="email">이메일</label>
            <input
              v-model="profile.email"
              type="email"
              class="form-control"
              placeholder="changil01@gmail.com"
              id="email"
              name="email"
            />
          </div>
          <div class="mb-3 mt-3">
            <label for="phonenumber"
              >휴대폰 번호</label
            >
            <input
              v-model="profile.phonenumber"
              type="text"
              class="form-control"
              id="phonenumber"
              name="phonenumber"
              placeholder="010-2934-9650"
            />
          </div>
          <div
            class="container d-flex justify-content-end"
          >
            <div class="row">
              <div class="col">
                <button
                  type="submit"
                  class="btn btn-outline-secondary"
                >
                  저장
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useProfileStore } from '../stores/profile';
import { useRouter } from 'vue-router';

const profileStore = useProfileStore();
const router = useRouter();

const profile = ref({ ...profileStore.$state });

const saveProfile = () => {
  profileStore.updateProfile(profile.value);
  router.push('/');
};
</script>

<style>
.titleStyle {
  color: #776c60;
  font-size: 2em;
  font-family: sans-serif;
  text-align: center;
}
</style>
