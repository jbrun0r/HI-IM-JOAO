<script setup lang="ts">
import { toRef } from "vue";
import { useField } from "vee-validate";
import InputText from "primevue/inputtext";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
  },
  id: {
    type: String,
  },
  disabled: {
    type: Boolean,
  },
  labelClass: {
    type: String,
  },
  maxLength: {
    type: String,
  },
});
const { errorMessage, value } = useField<string>(toRef(props, "name"));
</script>

<template>
  <div class="block">
    <label class="flex mb-2" :for="name" :class="labelClass">{{ label }}</label>
    <InputText
      :id="id"
      class="block w-full"
      v-model.trim="value"
      :aria-describedby="`${name}-help`"
      :class="{ 'p-invalid': errorMessage }"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :maxlength="maxLength"
    />
    <small :id="`${name}-help`" class="p-error text-xs">{{
      errorMessage
    }}</small>
  </div>
</template>

<style scoped lang="scss">
.p-inputtext {
  height: 50px;
  background-color: rgba(255, 0, 0, 0);
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
  border-radius: 0px;
  border-bottom: 0.5px #22222233 solid;
  padding-left: 0px;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  color: #222;
  font-weight: 300;
  word-wrap: break-word;

  &:focus,
  &:active {
    border-color: #222 !important;
    box-shadow: 0 0 0 0.1rem var(--green-500x);
  }
  &:hover {
    border-color: #222;
  }
  &:disabled {
    border: 0px !important;
    cursor: not-allowed;
    &:active {
      box-shadow: none;
    }
  }
}
.p-inputtext::placeholder {
  font-family: Roboto;
  font-style: normal;
  font-size: 20px;
  align-items: center;
  color: #222;
  font-weight: 300;
  text-transform: uppercase;
  word-wrap: break-word;
  opacity: 0.5;
}
.p-error {
  position: absolute;
  display: flex;
  text-align: left;
  margin-top: 0.25rem;
  font-family: Roboto;
}
</style>
