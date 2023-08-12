<script lang="ts" setup>
const props = defineProps({
  role: { type: String, required: true },
  company: { type: String, required: true },
  period: { type: String, required: true },
  description: { type: String, required: true },
  tasks: { type: String, required: true },
  skills: { type: Array as () => Array<string>, required: true },
});

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  tasks: string;
  skills: string[];
}

const wrapperStyle = `
  font-size: 20px;
  font-weight: 300;
  word-wrap: break-word;
  width: 100%;
`;

function formatSkills(skills) {
  return skills.join(" · ");
}
</script>

<template>
  <div :style="wrapperStyle">
    <b>{{ props.role }}</b> - {{ props.company }}
    <br />
    <br />
    Period {{ props.period }}
    <br />
    <br />
    {{ props.description }}
    <br />
    <br />
    {{ props.tasks }}
    <br />
    <br />
    <b>Skills: </b>
    <span>{{ formatSkills(props.skills) }}</span>
  </div>
</template>

<style scoped></style>
