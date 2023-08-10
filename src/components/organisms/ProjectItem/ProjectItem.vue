<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  projectName: { type: String, required: true },
  projectStacks: { type: String, required: true },
  img: { type: String, required: true },
});
</script>

<template>
  <article class="project-item flex flex-col w-full h-full cursor-pointer">
    <div class="image-container w-full min-h-full overflow-hidden relative">
      <div class="image-overlay" />
      <img class="project-image w-full h-full object-cover" :src="props.img" />
    </div>
    <div
      class="project-caption flex flex-row justify-between items-center mt-7"
    >
      <h2 class="project-name">
        {{ props.projectName }}
      </h2>
      <p class="project-stacks">
        {{ props.projectStacks }}
      </p>
    </div>
  </article>
</template>

<style scoped>
.image-container {
  max-height: 667px;
}
.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  pointer-events: none;
  transition: opacity 0.7s ease-in-out;
}

.image-container:hover .image-overlay {
  opacity: 0;
}

.project-name {
  color: #222222;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 20px;
  word-wrap: break-word;
}

.project-stacks {
  color: #222222;
  font-size: 17px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 20px;
  word-wrap: break-word;
  opacity: 0.5;
}
</style>
