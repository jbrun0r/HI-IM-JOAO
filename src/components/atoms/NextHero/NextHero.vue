<template>
  <div
    class="next-hero"
    style="width: 100%; height: 168.11px; overflow: hidden"
  >
    <div class="next-hero-title" style="width: 100%; height: 168.11px">
      <div class="next-hero-content">
        <div class="scrolling-text">
          PYTHON FLASK SQLALCHEMY POSTGRESQL MYSQL JAVA SPRING BOOT MVC ASP.NET
          CORE MVC C# VUE.JS TYPESCRIPT CSS TAILWIND JEST FLUTTER FIREBASE
          DOCKER AWS S3 AZURE
        </div>
      </div>
    </div>
  </div>
  <div
    class="contact-message"
    style="
      width: 100%;
      height: 53px;
      padding-left: 80px;
      opacity: 0.93;
      margin-top: 70px;
      margin-bottom: 140px;
    "
  >
    <div
      class="contact-text"
      style="
        color: #222222;
        font-size: 19px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 26px;
        word-wrap: break-word;
      "
    >
      Got a project?
      <br />
      Let's work together
    </div>
  </div>
</template>

<style scoped>
.next-hero {
  width: 100%;
  height: 168.11px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.next-hero-title {
  width: 100%;
  height: 168.11px;
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
  width: 100%;
  height: 53px;
  padding-left: 80px;
  opacity: 0.93;
  margin-top: 70px;
  margin-bottom: 140px;
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
