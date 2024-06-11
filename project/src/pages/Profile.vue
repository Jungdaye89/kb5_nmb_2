<template>
  <!-- TITLE  -->
  <div class="container mt-5 mb-3">
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
        <form>
          <div class="mb-3 mt-3">
            <label for="name">이름</label>
            <input
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
              type="radio"
              class="form-check-input me-2"
              id="male"
              value="male"
              name="gender"
              autocomplete="off"
              checked
            />남자
            <input
              type="radio"
              class="form-check-input me-2"
              id="female"
              value="female"
              name="gender"
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
                    class="form-select"
                    id="mm"
                  >
                    <option>8</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                  </select>
                </span>
              </div>
              <div class="bir_dd flex-fill">
                <span>
                  <select
                    class="form-select"
                    id="dd"
                  >
                    <option>18</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                    <option>13</option>
                    <option>14</option>
                    <option>15</option>
                    <option>16</option>
                    <option>17</option>

                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                    <option>27</option>
                    <option>28</option>
                    <option>29</option>
                    <option>30</option>
                    <option>31</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
          <div class="mb-3 mt-3">
            <label for="email">이메일</label>
            <input
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
              type="email"
              class="form-control"
              id="phonenumber"
              name="phonenumber"
              placeholder="010-2934-9650"
            />
          </div>
        </form>
        <div
          class="container d-flex justify-content-end"
        >
          <div class="row">
            <div class="col">
              <button
                type="submit"
                class="btn btn-outline-dark"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style>
.titleStyle {
  color: #776c60;
  font-size: 2em;
  font-family: sans-serif;
  text-align: center;
}
</style>
