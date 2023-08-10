<template>
  <section class="hero-section w-full py-24 px-16">
    <div class="title-wrapper w-full justify-start items-start inline-flex">
      <h1 class="heading w-full">
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
  display: flex;
  width: 830px;
  color: #222222;
  font-size: 168.12px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 168.12px;
  word-wrap: break-word;
  justify-content: flex-end;
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

@media (max-width: 574px) {
  .hero-section {
    padding-top: 20px;
    height: 530px;
  }
  .name {
    display: block;
    width: 100%;
    font-size: 138px;
  }
  .description {
    display: flex;
    width: 73%;
    top: 176px;
    padding-left: 50%;
    justify-content: flex-end;
  }

  .description-about {
    text-align: right;
  }
  .greeting {
    width: 70%;
    font-size: 138px;
  }
}

@media (min-width: 575px) and (max-width: 767px) {
  .name {
    display: block;
    width: 105%;
  }
  .description {
    display: flex;
    width: 73%;
    top: 250px;
    left: 18%;
    right: inherit;
    padding-left: 50%;
    justify-content: flex-end;
  }

  .description-about {
    text-align: right;
  }
  .greeting {
    width: 60%;
  }
}

@media (min-width: 768px) and (max-width: 867px) {
  .name {
    width: 100%;
  }

  .description {
    top: 600px;
    position: absolute;
  }
}

@media (min-width: 868px) and (max-width: 967px) {
  .name {
    width: 100%;
  }
}

@media (min-width: 968px) and (max-width: 1023px) {
}

@media (min-width: 1024px) and (max-width: 1439px) {
}

@media (min-width: 1440px) {
}
</style>
