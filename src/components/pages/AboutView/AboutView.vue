<template>
  <html class="about-page h-full">
    <HeaderHero :active-item="'about'" />
    <AboutComponent />
    <FooterComponent />
  </html>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import AboutComponent from "@/components/organisms/AboutComponent/AboutComponent.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
</script>

<style>
.about-page {
  background: #121212;
  color: #d1d1d1 !important;
}
</style>
