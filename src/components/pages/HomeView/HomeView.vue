<template>
  <div class="home-page h-screen">
    <HeaderHero :active-item="'home'" />
    <HeroGreeting />
    <FooterHero />
    <ProjectGalley :project-pairs="projectPairs" />
    <NextHero />
    <FooterComponent />
  </div>
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
      projectName: "Cargo Train",
      projectStacks: "JAVA Limited Buffer",
      img: "https://github.com/jbrun0r/Aplica-oJavaThreadsTrain-Projeto/raw/demo-video/traint.gif",
      link: "https://github.com/jbrun0r/Aplica-oJavaThreadsTrain-Projeto",
    },
    {
      class: "item-30",
      projectName: "ChatBot",
      projectStacks: "Vue RASA",
      img: "https://github.com/jbrun0r/assets/blob/main/chatbot-front-end/quem-%C3%A9-Octocat.gif?raw=true",
      link: "https://github.com/jbrun0r/chatbot-front-end",
    },
  ],
  [
    {
      class: "item-30",
      projectName: "E-Commerce API",
      projectStacks: "Java Spring RESTful",
      img: "https://github.com/jbrun0r/assets/blob/main/RESTful-E-Commerce-API/E-Commerce-Spring.gif?raw=true",
      link: "https://github.com/jbrun0r/RESTful-E-Commerce-API-SpringBoot3",
    },
    {
      class: "item-60",
      projectName: "Institute API",
      projectStacks: "Flask Application MVC",
      img: "https://github.com/jbrun0r/assets/blob/main/insititute-api/institute-API-light.gif?raw=true",
      link: "https://github.com/jbrun0r/institute-api",
    },
  ],
  [
    {
      class: "item-60",
      projectName: "Alien Space War",
      projectStacks: "Java Swing",
      img: "https://github.com/jbrun0r/MeuPrimeiroJogo---Alien-Space-War/raw/demo-video/alien.gif?",
      link: "https://github.com/jbrun0r/MeuPrimeiroJogo---Alien-Space-War",
    },
    {
      class: "item-30",
      projectName: "Heart Disease Prediction",
      projectStacks: "Machine Learning EDA",
      img: "https://github.com/jbrun0r/predicting-heart-disease/blob/outputs/predicting-heart-disease.gif?raw=true",
      link: "https://github.com/jbrun0r/predicting-heart-disease",
    },
  ],
  [
    {
      class: "item-30",
      projectName: "Rasterized",
      projectStacks: "Python ",
      img: "https://github.com/jbrun0r/cg-rasterized/raw/assets/rasterized/assets/output_7_0.png?raw=true",
      link: "https://github.com/jbrun0r/cg-rasterized",
    },
    {
      class: "item-60",
      projectName: "Vehicle On-Board Computer",
      projectStacks: "C PIC",
      img: "https://github.com/jbrun0r/Computador-de-Bordo-PIC-18F4520/raw/main/Comp%20Bordo.gif?raw=true",
      link: "https://github.com/jbrun0r/Computador-de-Bordo-PIC-18F4520",
    },
  ],
];
</script>

<style scoped>
.home-page {
  background: #eee;
  color: #222 !important;
}
</style>
