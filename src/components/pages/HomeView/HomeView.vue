<template>
  <div class="home-page flex flex-col" v-if="homeData">
    <HeaderHero :active-item="'home'" />
    <HeroGreeting
      :greeting="homeData?.greeting"
      :name="homeData?.name"
      :description="homeData?.description"
    />
    <!-- <FooterHero /> -->
    <ProjectGalley :project-pairs="homeData?.projects" />
    <NextHero :skills="homeData?.skills" />
    <div class="footer-wrapper">
      <FooterComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import HeroGreeting from "@/components/atoms/HeroGreeting/HeroGreeting.vue";
import ProjectGalley from "@/components/organisms/ProjectGallery/ProjectGallery.vue";
import NextHero from "@/components/atoms/NextHero/NextHero.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
import { useQuery } from "@tanstack/vue-query";
import { fetchHomeInfo } from "@/services/http/api";

const { data: homeData } = useQuery({
  queryKey: ["all-projects"],
  queryFn: async () => {
    return await fetchHomeInfo();
  },
});
</script>

<style scoped>
.home-page {
  background: #eee;
  color: #222 !important;
}
</style>
