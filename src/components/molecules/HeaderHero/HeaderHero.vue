<script lang="ts" setup>
import { ref, toRef } from "vue";
import { useRouter } from "vue-router";

const activeItem = ref("");
const router = useRouter();

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
          @click="router.push({ name: 'homeView' })"
          class="item-link-home cursor-pointer"
          :class="{ 'active-link': activeItem === 'home' }"
        >
          Home
        </a>
      </div>
      <div class="item-link cursor-not-allowed">
        <a
          @click="router.push({ name: 'contactView' })"
          class="item-link-about cursor-pointer"
          :class="{ 'active-link': activeItem === 'contact' }"
        >
          Contact
        </a>
      </div>
      <div class="item-link">
        <a
          @click="router.push({ name: 'aboutView' })"
          class="item-link-about cursor-pointer"
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
  width: 50px;
  height: 50px;
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
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 24px;
  word-wrap: break-word;
}

.active-link {
  border-bottom: 1px solid;
}

@media (max-width: 299px) {
  .header {
    padding-left: 10%;
    padding-right: 10%;
  }

  .nav-list {
    gap: 0.5rem;
  }
}

@media (min-width: 300px) and (max-width: 500px) {
  .header {
    padding-left: 10%;
    padding-right: 10%;
  }

  .nav-list {
    gap: 1.75rem;
  }
}
</style>
