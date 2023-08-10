<template>
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
      />
    </tuple>
  </section>
</template>

<script lang="ts" setup>
import ProjectItem from "@/components/organisms/ProjectItem/ProjectItem.vue";

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
</style>
