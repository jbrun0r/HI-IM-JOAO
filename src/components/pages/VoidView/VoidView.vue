<template>
  <html class="home-page">
    <HeaderHero :active-item="'home'" />
    <HeroGreeting />
    <FooterHero />
    <ProjectGalley :project-pairs="projectPairs" />
    <NextHero />
    <FooterComponent />
  </html>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import HeroGreeting from "@/components/atoms/HeroGreeting/HeroGreeting.vue";
import FooterHero from "@/components/atoms/FooterHero/FooterHero.vue";
import ProjectGalley from "@/components/organisms/ProjectGallery/ProjectGallery.vue";
import NextHero from "@/components/atoms/NextHero/NextHero.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";

const projectPairs = [
  [
    {
      class: "item-60",
      projectName: "Lorem Ipsum",
      projectStacks: "is simply dummy text",
      img: "https://via.placeholder.com/866x635",
    },
    {
      class: "item-30",
      projectName: "Lorem Ipsum",
      projectStacks: "is simply dummy text",
      img: "https://via.placeholder.com/433x635",
    },
  ],
  [
    {
      class: "item-30",
      projectName: "Lorem Ipsum",
      projectStacks: "is simply dummy text",
      img: "https://via.placeholder.com/433x635",
    },
    {
      class: "item-60",
      projectName: "Lorem Ipsum",
      projectStacks: "is simply dummy text",
      img: "https://via.placeholder.com/866x635",
    },
  ],
  [
    {
      class: "item-60",
      projectName: "Lorem Ipsum",
      projectStacks: "is simply dummy text",
      img: "https://via.placeholder.com/866x635",
    },
    {
      class: "item-30",
      projectName: "Lorem Ipsum",
      projectStacks: "is simply dummy text",
      img: "https://via.placeholder.com/433x635",
    },
  ],
];
</script>

<style scoped>
.home-page {
  background: #eee;
}
</style>
