<template>
  <html class="home-page">
    <HeaderHero :active-item="'home'" />
    <HeroGreeting
      :greeting="greetingPlaceholder"
      :description="descriptionPlaceholder"
      :name="namePlaceholder"
    />
    <ProjectGalley :project-pairs="projectsPlaceholder" />
    <NextHero :skills="skillsPlaceholder" />
    <FooterComponent />
  </html>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import HeroGreeting from "@/components/atoms/HeroGreeting/HeroGreeting.vue";
import ProjectGalley from "@/components/organisms/ProjectGallery/ProjectGallery.vue";
import NextHero from "@/components/atoms/NextHero/NextHero.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
import {
  greetingPlaceholder,
  namePlaceholder,
  descriptionPlaceholder,
  projectsPlaceholder,
  skillsPlaceholder,
} from "@/shared/placeholders";
</script>

<style scoped>
.home-page {
  background: #eee;
  color: #222 !important;
}
</style>
