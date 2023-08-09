<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps({
  projectName: { type: String, required: true },
  projectStacks: { type: String, required: true },
  img: { type: String, required: true },
});
</script>

<template>
  <div
    class="project-item"
    style="
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
    "
  >
    <div
      class="image-container"
      style="
        width: 100%;
        min-height: 100%;
        max-height: 667px;
        overflow: hidden;
        position: relative;
      "
    >
      <div class="image-overlay" style=""></div>
      <img
        class="project-image"
        style="width: 100%; height: 100%; object-fit: cover"
        :src="props.img"
      />
    </div>
    <div
      class="project-caption"
      style="
        margin-top: 30px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      "
    >
      <div
        class="project-name"
        style="
          color: #222222;
          font-size: 17px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 20px;
          word-wrap: break-word;
        "
      >
        {{ props.projectName }}
      </div>
      <div
        class="project-stacks"
        style="
          color: #222222;
          font-size: 17px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 20px;
          word-wrap: break-word;
          opacity: 0.5;
        "
      >
        {{ props.projectStacks }}
      </div>
    </div>
  </div>
</template>

<style scoped>
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
</style>
