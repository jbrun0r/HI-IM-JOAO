<template>
  <HeaderGallery
    v-if="projectPairs"
    :projectCount="projectPairs.length * 2 || 0"
  />
  <section
    class="portfolio-section flex flex-col w-full px-20 pb-20 justify-between"
  >
    <tuple class="tuple-items" v-for="pair in projectPairs" :key="pair[0].img">
      <ProjectItem
        v-for="project in pair"
        :key="project.img"
        :class="project.class"
        :projectName="project.projectName"
        :projectStacks="project.projectStacks"
        :img="project.img"
        :link="project.link"
      />
    </tuple>
  </section>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";
import ProjectItem from "@/components/organisms/ProjectItem/ProjectItem.vue";
import HeaderGallery from "@/components/atoms/HeaderGallery/HeaderGallery.vue";
import { Project } from "@/shared/types";

const props = defineProps({
  projectPairs: { type: Array as () => Array<Array<Project>>, required: true },
});

const { projectPairs } = toRefs(props);
</script>

<style scoped>
.tuple-items {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-bottom: 150px;
  justify-content: space-between;
}

.item-60 {
  width: 60% !important;
  height: 635px !important;
}

.item-30 {
  width: 30% !important;
  height: 635px !important;
}

@media (max-width: 520px) {
  .portfolio-section {
    padding-left: 10%;
    padding-right: 10%;
  }

  .tuple-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 150px;
    justify-content: space-between;
    padding-bottom: 0px;
    padding-top: 30px;
  }

  .item-60 {
    width: 100% !important;
    height: 60% !important;
    padding-bottom: 60px;
  }

  .item-30 {
    width: 100% !important;
    height: 60% !important;
    padding-bottom: 60px;
  }
}

@media (min-width: 521px) and (max-width: 767px) {
  .tuple-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 150px;
    justify-content: space-between;
    padding-bottom: 0px;
    padding-top: 30px;
  }

  .item-60 {
    width: 100% !important;
    height: 60% !important;
    padding-bottom: 60px;
  }

  .item-30 {
    width: 100% !important;
    height: 60% !important;
    padding-bottom: 60px;
  }
}

@media (min-width: 768px) and (max-width: 867px) {
  .tuple-items {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 150px;
    justify-content: space-between;
    padding-bottom: 0px;
  }

  .item-60 {
    width: 100% !important;
    height: 60% !important;
    padding-bottom: 70px;
  }

  .item-30 {
    width: 100% !important;
    height: 60% !important;
    padding-bottom: 70px;
  }
}

@media (min-width: 868px) and (max-width: 967px) {
  .item-60 {
    width: 45% !important;
    height: 300px !important;
    padding-bottom: 50px;
  }

  .item-30 {
    width: 45% !important;
    height: 300px !important;
    padding-bottom: 50px;
  }
}

@media (min-width: 968px) and (max-width: 1439px) {
  .item-60 {
    height: 420px !important;
  }

  .item-30 {
    height: 420px !important;
  }
}

@media (min-width: 1440px) and (max-width: 1639px) {
  .item-60 {
    height: 500px !important;
  }

  .item-30 {
    height: 500px !important;
  }
}
</style>
