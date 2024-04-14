<template>
  <main class="about flex flex-col px-16 pb-16">
    <p class="about-small pb-10">About</p>
    <AcademicEducation
      :degree="degree"
      :university="university"
      :period="period"
    />
    <ExperienceGallery :experienceList="experiences" />
  </main>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import ExperienceGallery from "@/components/organisms/ExperienceGallery/ExperienceGallery.vue";
import AcademicEducation from "@/components/atoms/AcademicEducation/AcademicEducation.vue";
import { Experience } from "@/shared/types";

const props = defineProps({
  degree: { type: String, required: true },
  university: { type: String, required: true },
  period: { type: String, required: true },
  experiences: { type: Array as () => Array<Experience>, required: true },
});

const { degree, university, period } = toRefs(props);
</script>

<style scoped>
.about-small {
  font-size: 120px;
  font-weight: 500;
  text-transform: uppercase;
  word-wrap: break-word;
  padding-bottom: 40px;
}

@media (max-width: 300px) {
  .about {
    padding-left: 10%;
    padding-right: 10%;
  }

  .about-small {
    font-size: 60px;
  }
}

@media (min-width: 301px) and (max-width: 387px) {
  .about {
    padding-left: 10%;
    padding-right: 10%;
  }

  .about-small {
    font-size: 70px;
  }
}

@media (min-width: 388px) and (max-width: 500px) {
  .about {
    padding-left: 10%;
    padding-right: 10%;
  }

  .about-small {
    font-size: 90px;
  }
}

@media (min-width: 501px) and (max-width: 520px) {
  .about-small {
    font-size: 90px;
  }
}
</style>
