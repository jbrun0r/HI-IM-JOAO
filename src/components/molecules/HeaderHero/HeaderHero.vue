<script lang="ts" setup>
import { ref, toRef } from "vue";

const activeItem = ref("");

type Item = "home" | "contact" | "about";

const props = defineProps({
  activeItem: {
    type: String as () => Item,
    required: true,
  },
});

const item = toRef(props, "activeItem");

activeItem.value = item.value;
</script>

<template>
  <header
    class="header flex w-full h-32 pt-1 pb-5 px-16 justify-between items-center"
  >
    <span class="link-logo flex items-center">>_</span>

    <nav class="nav-list flex pt-5 pb-4 ml-5 gap-12">
      <div class="item-link">
        <a
          href="#"
          class="item-link-home"
          :class="{ 'active-link': activeItem === 'home' }"
        >
          Home
        </a>
      </div>
      <div class="item-link cursor-not-allowed">
        <a
          href="#"
          class="item-link-contact cursor-not-allowed"
          :class="{ 'active-link': activeItem === 'contact' }"
        >
          Contact
        </a>
      </div>
      <div class="item-link">
        <a
          href="#"
          class="item-link-about cursor-not-allowed"
          :class="{ 'active-link': activeItem === 'about' }"
        >
          About
        </a>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.link-logo {
  width: 131px;
  height: 50px;
  color: #222222;
  font-size: 36px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 24px;
  word-wrap: break-word;
}

.item-link {
  display: flex;
}

.item-link a {
  color: #222222;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 24px;
  word-wrap: break-word;
}

.active-link {
  border-bottom: 1px solid #222222;
}
</style>
