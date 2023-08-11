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

@media (max-width: 299px) {
  .hero-section {
    height: 350px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .name {
    display: block;
    width: 100%;
    font-size: 50px !important;
    line-height: 70px;
  }
  .description {
    width: 80%;
    top: 300px !important;
    left: 10%;
    padding-right: 0% !important;
    justify-content: flex-end;
  }

  .description-about {
    text-align: left;
  }
  .greeting {
    width: 100% !important;
    font-size: 50px !important;
    line-height: 70px;
  }
}

@media (min-width: 300px) and (max-width: 386px) {
  .hero-section {
    height: 380px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .name {
    display: block;
    width: 100%;
    font-size: 80px !important;
    line-height: 100px;
  }
  .description {
    width: 80%;
    top: 366px !important;
    left: 10%;
    padding-right: 0% !important;
    justify-content: flex-end;
  }

  .description-about {
    text-align: left;
  }
  .greeting {
    width: 100% !important;
    font-size: 80px !important;
    line-height: 100px;
  }
}

@media (min-width: 387px) and (max-width: 500px) {
  .hero-section {
    height: 420px;
    padding-top: 20px;
    padding-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
  }
  .name {
    display: block;
    width: 100%;
    font-size: 100px !important;
    line-height: 120px;
  }
  .description {
    display: flex;
    width: 70%;
    top: 166px !important;
    padding-left: 27% !important;
    padding-right: 1% !important;
    justify-content: flex-end;
  }

  .description-about {
    text-align: right;
  }
  .greeting {
    width: 60% !important;
    font-size: 100px !important;
    line-height: 120px;
  }
}

@media (min-width: 501px) and (max-width: 574px) {
  .hero-section {
    padding-top: 20px;
    height: 530px;
  }
  .name {
    display: block;
    width: 105%;
    font-size: 138px;
    line-height: 150px;
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
    width: 60% !important;
    font-size: 138px;
    line-height: 150px;
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
