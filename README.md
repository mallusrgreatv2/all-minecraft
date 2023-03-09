<p align="center">
  <a href="https://discord.gg/J8F5ZVkanh">
    <img alt="Discord" src="https://img.shields.io/discord/1046120096294260826?color=5865F2&logo=discord&logoColor=blue" >
  </a>
  <a href="https://www.npmjs.com/package/all-minecraft">
    <img alt="NPM" src="https://img.shields.io/npm/v/all-minecraft">
  </a>
</p>

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

#### MinecraftServerInfo.query

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

#### MinecraftPlayerInfo.getPlayerInfo

```javascript
player.getPlayerInfo().then(console.log);
```

##### [Expected Output](https://pastes.dev/EvDGaIQHKe)

#### Other

```javascript
console.log("Username / UUID Specified in constructor: " + player.getUsernameOrUUID);
```

##### [Expected Output](https://pastes.dev/PjSAtkHZ1z)

## That's it! You're done
