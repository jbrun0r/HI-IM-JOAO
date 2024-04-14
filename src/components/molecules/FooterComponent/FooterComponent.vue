<template>
  <footer
    class="footer-container w-full h-28 px-20 pt-5 pb-10 flex justify-between mx-auto items-center"
  >
    <div class="footer-left flex flex-row gap-4 items-center w-1/3">
      <vue-feather
        class="footer-left-icon"
        style="overflow: none !importante"
        type="arrow-up-right"
      />
      <p class="scroll-text">Thanks for scrolling.</p>
    </div>
    <div class="footer-center flex flex-col justify-center w-1/3 text-center">
      <p class="year-text-c">MIT License</p>
      <p class="year-text-c">Copyright © {{ year }} João</p>
    </div>
    <nav
      class="footer-right flex flex-row gap-x-5 items-center w-1/3 justify-end align-items-center"
    >
      <a
        href="https://www.linkedin.com/in/joaobrunodev/"
        class="w-5 cursor-pointer flex items-center"
      >
        <vue-feather class="w-5" type="linkedin" />
      </a>

      <a
        href="https://github.com/jbrun0r"
        class="w-5 cursor-pointer flex items-center"
      >
        <vue-feather class="w-5" type="github" />
      </a>
      <a href="#" class="w-5 cursor-not-allowed flex items-center">
        <vue-feather class="w-5 cursor-not-allowed" type="share-2" />
      </a>
    </nav>
  </footer>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const year = ref(new Date().getFullYear());
</script>

<style scoped>
.scroll-text,
.year-text-c {
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 30px;
  word-wrap: break-word;
}

@media (max-width: 668px) {
  .footer-container {
    column-gap: 1.25rem;
    flex-direction: column;
    height: 165px;
    padding-left: 10%;
    padding-right: 10%;
  }

  .footer-left {
    justify-content: center;
    width: 100%;
    opacity: 0.8;
  }

  .footer-center {
    justify-content: center;
    width: 100%;
    opacity: 0.8;
  }

  .footer-left-icon {
    opacity: 0.8;
  }

  .footer-right {
    width: 100%;
    margin-top: 20px;
    margin-bottom: 16px;
    justify-content: center;
  }
}
</style>
