<template>
  <HeaderHero></HeaderHero>
  <HeroGreeting></HeroGreeting>
  <FooterHero></FooterHero>
  <ProjectGalley></ProjectGalley>
  <FooterComponent></FooterComponent>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import HeroGreeting from "@/components/atoms/HeroGreeting/HeroGreeting.vue";
import FooterHero from "@/components/atoms/FooterHero/FooterHero.vue";
import ProjectGalley from "@/components/organisms/ProjectGallery/ProjectGallery.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
</script>

<style scoped></style>
