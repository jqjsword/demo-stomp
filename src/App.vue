<template>
  <div id="app"></div>
</template>

<script>
import SockJS from "sockjs-client";
import Stomp from "stompjs";

export default {
  name: "App",

  created() {
    const url = "/api/shy/shy/dataType/push";
    const socket = new SockJS(url);
    const headers = {};
    const stompClient = Stomp.over(socket);

    stompClient.connect(
      headers,
      () => {
        console.log("连接成功 :>> ");
      },
      () => {
        console.log("连接失败 :>> ");
      }
    );
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
