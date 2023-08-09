<script lang="ts" setup></script>

<template>
  <div
    class="DivFooterContainer"
    style="
      width: 100%;
      height: 100px;
      background: #eeeeee;
      padding-left: 80px;
      padding-right: 80px;
      padding-top: 20px;
      padding-bottom: 40px;
      display: flex;
      justify-self: center;
      justify-content: space-between;
      margin: auto;
    "
  >
    <div
      class="DivCopyright"
      style="display: flex; flex-direction: row; gap: 13px"
    >
      <vue-feather type="arrow-up-right" style="margin: auto"></vue-feather>
      <div
        class="2023"
        style="
          text-align: center;
          color: #222222;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 30px;
          word-wrap: break-word;
          margin: auto;
        "
      >
        Thanks for scrolling.
      </div>
    </div>
    <div class="DivCopyright" style="margin: auto">
      <div
        class="2023"
        style="
          text-align: center;
          color: #222222;
          font-size: 13px;
          font-weight: 500;
          text-transform: uppercase;
          line-height: 30px;
          word-wrap: break-word;
          margin: auto;
        "
      >
        © 2023 João Bruno
      </div>
    </div>
    <div style="display: flex; flex-direction: row; gap: 13px">
      <vue-feather
        type="linkedin"
        style="width: 20px; margin: auto"
      ></vue-feather>
      <vue-feather
        type="github"
        style="width: 20px; margin: auto"
      ></vue-feather>
      <vue-feather
        type="share-2"
        style="width: 20px; margin: auto"
      ></vue-feather>
    </div>
  </div>
</template>
