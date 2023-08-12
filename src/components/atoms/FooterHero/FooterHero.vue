<template>
  <footer
    class="footer-section flex w-full h-28 px-20 py-11 justify-between items-center"
  >
    <div class="scroll-button">
      <div class="scroll-to-explore flex flex-row gap-4 items-center">
        <span class="scroll-to-explore-text">Scroll To Explore</span>
        <vue-feather class="scroll-to-explore-icon" type="arrow-down-right" />
      </div>
    </div>
    <div class="project-count">All Projects (08)</div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.scroll-to-explore {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 30px;
  word-wrap: break-word;
}

.project-count {
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 30px;
  word-wrap: break-word;
}

@media (max-width: 422px) {
  .footer-section {
    padding-left: 10%;
    padding-right: 10%;
    padding-top: 10px;
    padding-bottom: 10px;
    height: 3rem;
  }
  .scroll-to-explore-text {
    display: none;
  }
}

@media (min-width: 422px) and (max-width: 500px) {
  .footer-section {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
