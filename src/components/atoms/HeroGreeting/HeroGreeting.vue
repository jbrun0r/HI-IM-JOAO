<template>
  <section class="hero-section w-full py-24 px-16">
    <div class="title-wrapper justify-start items-start inline-flex">
      <h1 class="heading">
        <p class="greeting">Hi, I'm</p>
        <p class="name">João</p>
      </h1>
    </div>
    <div class="description w-72 h-20 left-20">
      <div class="description-wrapper">
        <span class="description-about">
          <p>Researcher,</p>
          <p>Full Stack Developer</p>
          <p>and Computer Engineering student</p>
          <p>at the Federal Institute of Education,</p>
          <p>Science and Technology of Ceará.</p>
        </span>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup></script>

<style scoped>
.hero-section {
  height: 656.22px;
}

.greeting {
  color: #222222;
  font-size: 159.12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 168.12px;
  word-wrap: break-word;
}

.name {
  padding-left: 400px;
  color: #222222;
  font-size: 168.12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 168.12px;
  word-wrap: break-word;
}

.description {
  top: 432.16px;
  position: absolute;
}

.description-about {
  color: #222222;
  font-size: 13px;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 20px;
  word-wrap: break-word;
}
</style>
