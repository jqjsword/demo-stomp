const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,

  devServer: {
    port: 1888,
    proxy: {
      "/api": {
        //本地服务接口地址
        target: "http://192.168.8.40:8083",
        ws: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
  },
});
