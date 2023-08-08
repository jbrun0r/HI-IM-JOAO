const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  devServer: {
    proxy: {
      "/api": {
        target: process.env.URL,
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
      },
    },
  },
});
