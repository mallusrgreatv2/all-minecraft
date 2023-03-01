# all-minecraft

## Installation

```sh
# NPM
npm install --save all-minecraft

# Yarn
yarn add all-minecraft
```

## Usage

```js
// ES5
const allMinecraft = require("all-minecraft");

// ES6
import allMinecraft from "all-minecraft";
```

### Server Information

#### MinecraftServerInfo.serverInfo

```javascript
const { MinecraftServerInfo } = require("all-minecraft");
const server = new MinecraftServerInfo({
  serverIp: "pika.host",
});
server.serverInfo().then(console.log);
```

##### [Expected Output](https://pastes.dev/9yfopsNdvo)

#### MinecraftServreInfo.query

```javascript
const server = new MinecraftServerInfo({
  serverIp: "lobby.freecraft.eu",
  queryPort: 25555,
});
server.query().then(console.log);
```

##### [Expected Output](https://pastes.dev/ip0vMW78zx)

#### Others

```javascript
const server = new MinecraftServerInfo({
  serverIp: "darklegacymc.tk",
});
console.log("Favicon: " + server.favicon());
console.log("Banner: " + server.getBannerURL({ title: "DarkLegacyMC" }));
console.log("IP: " + server.getServerIp);
console.log("Port: " + server.getServerPort);
```

##### [Expected Output](https://pastes.dev/8Wo7bjFZAY)

### Player Information

#### MinecraftPlayerInfo.getHead

```javascript
const { MinecraftPlayerInfo } = require("all-minecraft");
const player = new MinecraftPlayerInfo({
  usernameOrUUID: "mallusrgreat",
});
console.log(
  player.getHead({
    extension: "png",
    helm: false,
    size: 100,
    facing: "left", // Facing is only for isometric
  })
);
```

##### [Expected Output](https://pastes.dev/gFKTjOVxDH)

#### MinecraftPlayerInfo.getSkin

```javascript
console.log(
  player.getSkin({
    extension: "png",
    helm: false,
    size: 100,
    facing: "left", // Facing is only for isometric version
  })
);
```

##### [Expected Output](https://pastes.dev/6PGy3mmz7b)

#### MinecraftPlayerInfo.getPlayer (Cache)

```javascript
player.getPlayer().then(console.log);
```

##### [Expected Output](https://pastes.dev/veqvThlsdz)

#### MinecraftPlayerInfo.getCachedUUID

```javascript
console.log("Before Caching: " + player.getCachedUUID);
player.getPlayer().then(() => {
  console.log("After Caching: " + player.getCachedUUID);
});

```

##### Output

```text
Before Caching: undefined
After Caching: 318949122b224fadaecd46f1f92c3f1e
```

#### Making use of cache

```javascript
player.getPlayer().then(() => {
  const plr = new MinecraftPlayerInfo({
    usernameOrUUID: player.getCachedUUID,
  });
  plr.getPlayerInfo().then(console.log);
});

```

##### [Expected Output](https://pastes.dev/lQ42lkM72T)

#### Other

```javascript
console.log("Username / UUID Specified in constructor: " + player.getUsernameOrUUID);
```

##### [Expected Output](https://pastes.dev/PjSAtkHZ1z)

## That's it! You're done
