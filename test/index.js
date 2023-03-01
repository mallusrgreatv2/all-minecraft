import allMinecraft from "all-minecraft";
const server = new allMinecraft.MinecraftServerInfo({
  serverIp: "pika.host",
});
server.serverInfo().then(console.log);
