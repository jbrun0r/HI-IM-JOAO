<template>
  <footer
    class="footer-container w-full h-28 px-20 pt-5 pb-10 flex justify-between mx-auto items-center"
  >
    <div class="footer-left flex flex-row gap-4 items-center">
      <vue-feather type="arrow-up-right" />
      <p class="scroll-text">Thanks for scrolling.</p>
    </div>
    <div class="footer-center text-center justify-self-center">
      <p class="year-text-c">© 2023 João Bruno</p>
    </div>
    <nav class="footer-right flex flex-row gap-x-5 items-center">
      <vue-feather class="w-5 cursor-pointer" type="linkedin" />
      <vue-feather class="w-5 cursor-pointer" type="github" />
      <vue-feather class="w-5 cursor-pointer" type="share-2" />
    </nav>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
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

.year-text-c {
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
