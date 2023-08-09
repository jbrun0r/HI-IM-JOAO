<template>
  <main class="home-page">
    <HeaderHero></HeaderHero>
    <HeroGreeting></HeroGreeting>
    <FooterHero></FooterHero>
    <ProjectGalley></ProjectGalley>
    <NextHero></NextHero>
    <FooterComponent></FooterComponent>
  </main>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import HeroGreeting from "@/components/atoms/HeroGreeting/HeroGreeting.vue";
import FooterHero from "@/components/atoms/FooterHero/FooterHero.vue";
import ProjectGalley from "@/components/organisms/ProjectGallery/ProjectGallery.vue";
import NextHero from "@/components/atoms/NextHero/NextHero.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
</script>

<style scoped>
.home-page {
  background: #eee;
}
</style>
