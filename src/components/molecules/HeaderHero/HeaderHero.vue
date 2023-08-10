<template>
  <header
    class="header flex w-full h-32 pt-1 pb-5 px-16 justify-between items-center"
  >
    <img
      class="link-logo"
      src="https://via.placeholder.com/131x50"
      alt="Logo"
    />

    <nav class="nav-list flex pt-5 pb-4 ml-5 gap-12">
      <div class="item-link">
        <a href="#" class="item-link-home">Home</a>
      </div>
      <div class="item-link">
        <a href="#" class="item-link-contact">Contact</a>
      </div>
      <div class="item-link">
        <a href="#" class="item-link-about">About</a>
      </div>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped>
.link-logo {
  width: 131px;
  height: 50px;
}

.item-link {
  display: flex;
  cursor: pointer;
}

.item-link a {
  color: #222222;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 24px;
  word-wrap: break-word;
}
</style>
