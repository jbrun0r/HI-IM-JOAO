<template>
  <div class="contact-page flex flex-col">
    <HeaderHero :active-item="'contact'" />
    <ContactNav />
    <SendEmail />
    <div class="footer-wrapper">
      <FooterComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import HeaderHero from "@/components/molecules/HeaderHero/HeaderHero.vue";
import ContactNav from "@/components/atoms/ContactNav/ContactNav.vue";
import SendEmail from "@/components/organisms/SendEmail/SendEmail.vue";
import FooterComponent from "@/components/molecules/FooterComponent/FooterComponent.vue";
</script>

<style lang="scss" scoped>
.contact-page {
  background: #eee;
  color: #222 !important;
  min-height: 100vh;
}
</style>
