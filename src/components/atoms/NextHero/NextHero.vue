<template>
  <section class="next-hero flex w-full overflow-hidden items-center">
    <div class="next-hero-title w-full">
      <div class="next-hero-content">
        <p class="scrolling-text">
          PYTHON FLASK SQLALCHEMY POSTGRESQL MYSQL JAVA SPRING BOOT MVC ASP.NET
          CORE MVC C# VUE.JS TYPESCRIPT CSS TAILWIND JEST FLUTTER FIREBASE
          DOCKER AWS S3 AZURE
        </p>
      </div>
    </div>
  </section>
  <section class="contact-message w-full pl-20 mt-16 mb-36 opacity-90">
    <div class="contact-text">
      <p>Got a project?</p>
      <p>Let's work together</p>
    </div>
  </section>
</template>

<style scoped>
.next-hero {
  height: 168px;
}

.next-hero-title {
  height: 168px;
}

.next-hero-content {
  color: #222222;
  font-size: 162px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 168.12px;
  word-wrap: break-word;
  white-space: nowrap;
  animation: scrollText 40s linear infinite;
}

@keyframes scrollText {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-650%);
  }
}

.contact-message {
  height: 53px;
}

.contact-text {
  color: #222222;
  font-size: 19px;
  font-weight: 500;
  text-transform: uppercase;
  line-height: 26px;
  word-wrap: break-word;
}
</style>
