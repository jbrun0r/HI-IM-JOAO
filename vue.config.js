const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  publicPath: "/HI-IM-JOAO",
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
