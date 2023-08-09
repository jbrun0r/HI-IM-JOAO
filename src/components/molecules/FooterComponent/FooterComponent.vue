<template>
  <div class="footer-container">
    <div
      class="footer-content"
      style="display: flex; flex-direction: row; gap: 13px"
    >
      <vue-feather type="arrow-up-right" style="margin: auto"></vue-feather>
      <div class="scroll-text">Thanks for scrolling.</div>
    </div>
    <div class="footer-content">
      <div class="year-text">© 2023 João Bruno</div>
    </div>
    <div
      class="footer-content"
      style="display: flex; flex-direction: row; gap: 13px"
    >
      <vue-feather
        type="linkedin"
        style="width: 20px; margin: auto"
      ></vue-feather>
      <vue-feather
        type="github"
        style="width: 20px; margin: auto"
      ></vue-feather>
      <vue-feather
        type="share-2"
        style="width: 20px; margin: auto"
      ></vue-feather>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.footer-container {
  width: 100%;
  height: 100px;
  padding-left: 80px;
  padding-right: 80px;
  padding-top: 20px;
  padding-bottom: 40px;
  display: flex;
  justify-self: center;
  justify-content: space-between;
  margin: auto;
}

.footer-content {
  display: flex;
  flex-direction: row;
  gap: 13px;
}

.scroll-text {
  text-align: center;
  color: #222222;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 30px;
  word-wrap: break-word;
  margin: auto;
}

.year-text {
  text-align: center;
  color: #222222;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 30px;
  word-wrap: break-word;
  margin: auto;
}
</style>
