<template>
  <p class="academic-education-small">ACADEMIC EDUCATION</p>
  <span class="academic-education-description">
    {{ degree }} <br />
    {{ university }}
    <br />
    {{ period }}
  </span>
</template>

<script lang="ts" setup>
import { toRefs } from "vue";

const props = defineProps({
  degree: { type: String, required: true },
  university: { type: String, required: true },
  period: { type: String, required: true },
});

const { degree, university, period } = toRefs(props);
</script>

<style scoped>
.academic-education-small {
  font-size: 20px;
  font-weight: 800;
  text-transform: uppercase;
  word-wrap: break-word;
}

.academic-education-description {
  font-size: 20px;
  font-weight: 300;
  word-wrap: break-word;
  padding-top: 30px;
  padding-left: 14px;
}
</style>
