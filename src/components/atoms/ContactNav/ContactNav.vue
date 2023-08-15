<template>
  <div class="contact-nav-wrapper flex w-full px-16 justify-start">
    <nav
      class="flex flex-row gap-x-5 items-center justify-end align-items-center"
    >
      <a
        href="https://www.linkedin.com/in/joaobrunodev/"
        class="w-10 cursor-pointer flex items-center"
      >
        <vue-feather class="w-10" type="linkedin" />
      </a>
      <a
        href="https://github.com/jbrun0r"
        class="w-10 cursor-pointer flex items-center"
      >
        <vue-feather class="w-10" type="github" />
      </a>
    </nav>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
@media (max-width: 500px) {
  .contact-nav-wrapper {
    padding-left: 10%;
    padding-right: 10%;
  }
}
</style>
