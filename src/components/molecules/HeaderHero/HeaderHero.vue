<template>
  <div class="header">
    <img class="link-logo-png" src="https://via.placeholder.com/131x50" />

    <div class="nav-list">
      <div class="item-link">
        <div class="home">Home</div>
      </div>
      <div class="item-link">
        <div class="home">Contact</div>
      </div>
      <div class="item-link">
        <div class="home">About</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.header {
  width: 100%;
  height: 120px;
  padding: 30px 64px;
  justify-content: space-between;
  align-items: center;
  display: flex;
}

.link-logo-png {
  width: 131px;
  height: 50px;
  position: relative;
}

.nav-list {
  padding-top: 20px;
  padding-bottom: 16px;
  padding-left: 25px;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 50px;
  display: flex;
}

.item-link {
  display: flex;
}

.item-link div {
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 24px;
  word-wrap: break-word;
}
</style>
