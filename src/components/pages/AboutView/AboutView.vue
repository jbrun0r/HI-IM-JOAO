<template>
  <div
    class="about-page"
    v-if="aboutData?.experiences && aboutData.academicEducation"
  >
    <HeaderHero :active-item="'about'" />
    <AboutComponent
      :degree="aboutData?.academicEducation.degree"
      :university="aboutData?.academicEducation.university"
      :period="aboutData?.academicEducation.period"
      :experiences="aboutData?.experiences"
    />
    <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import AboutComponent from "@/components/organisms/AboutComponent/AboutComponent.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
import { useQuery } from "@tanstack/vue-query";
import { fetchAboutInfo } from "@/services/http/api";

const { data: aboutData } = useQuery({
  queryKey: ["all-projects"],
  queryFn: async () => {
    return await fetchAboutInfo();
  },
});
</script>

<style>
.about-page {
  background: #eee;
  color: #222 !important;
}
</style>
