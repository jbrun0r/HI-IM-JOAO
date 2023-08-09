<script lang="ts" setup>
import ProjectItem from "@/components/organisms/ProjectItem/ProjectItem.vue";
</script>

<template>
  <div
    class="portfolio-section"
    style="
      width: 100%;
      padding-left: 80px;
      padding-right: 80px;
      padding-bottom: 80px;
      justify-content: space-between;
      display: flex;
      flex-direction: column;
    "
  >
    <div
      style="
        width: 100%;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding-bottom: 150px;
      "
    >
      <ProjectItem
        style="width: 60%; height: 635px"
        projectName="Lorem Ipsum"
        projectStacks="is simply dummy tex"
        img="https://via.placeholder.com/866x635"
      ></ProjectItem>
      <ProjectItem
        style="width: 30%; height: 635px"
        projectName="Lorem Ipsum"
        projectStacks="is simply dummy tex"
        img="https://via.placeholder.com/433x635"
      ></ProjectItem>
    </div>
    <div
      style="
        width: 100%;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding-bottom: 150px;
      "
    >
      <ProjectItem
        style="width: 30%; height: 635px"
        projectName="Lorem Ipsum"
        projectStacks="is simply dummy tex"
        img="https://via.placeholder.com/433x635"
      ></ProjectItem>
      <ProjectItem
        style="width: 60%; height: 635px"
        projectName="Lorem Ipsum"
        projectStacks="is simply dummy tex"
        img="https://via.placeholder.com/866x635"
      ></ProjectItem>
    </div>
    <div
      style="
        width: 100%;
        justify-content: space-between;
        display: flex;
        flex-direction: row;
        padding-bottom: 150px;
      "
    >
      <ProjectItem
        style="width: 60%; height: 635px"
        projectName="Lorem Ipsum"
        projectStacks="is simply dummy tex"
        img="https://via.placeholder.com/866x635"
      ></ProjectItem>
      <ProjectItem
        style="width: 30%; height: 635px"
        projectName="Lorem Ipsum"
        projectStacks="is simply dummy tex"
        img="https://via.placeholder.com/433x635"
      ></ProjectItem>
    </div>
  </div>
</template>

<style scoped></style>
