<template>
  <section class="experience-container">
    <p class="section-title">EXPERIENCE</p>
    <div class="experience-items">
      <ExperienceItem
        class="item"
        v-for="(experience, index) in props.experienceList"
        :key="index"
        :role="experience.role"
        :company="experience.company"
        :period="experience.period"
        :description="experience.description"
        :tasks="experience.tasks"
        :skills="experience.skills"
      />
    </div>
  </section>
</template>

<script lang="ts" setup>
import ExperienceItem from "@/components/organisms/ExperienceItem/ExperienceItem.vue";
import { Experience } from "@/shared/types";

const props = defineProps({
  experienceList: { type: Array as () => Array<Experience>, required: true },
});
</script>

<style scoped>
.experience-container {
  padding-top: 40px;
}

.section-title {
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  word-wrap: break-word;
}

.experience-items {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 14px;
  gap: 80px;
}

.item {
  width: 45% !important;
}

@media (max-width: 967px) {
  .experience-items {
    flex-direction: column;
  }

  .item {
    width: 100% !important;
  }
}

@media (min-width: 968px) and (max-width: 1023px) {
}

@media (min-width: 1024px) and (max-width: 1439px) {
}

@media (min-width: 1440px) {
}
</style>
