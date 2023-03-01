export interface Cache {
  hIT: boolean;
  cache_time: number;
  cache_time_left?: number;
  cached_at: number;
  cached_until: number;
}

export interface PlayerInfoUUIDUsernameSearch {
  cache: Cache;
  id: string;
  name: string;
  status: string;
}
export interface SKIN {
  url: string;
}

export interface Texture {
  sKIN: SKIN;
}

export interface Decoded {
  profileId: string;
  profileName: string;
  signatureRequired: boolean;
  textures: Texture;
  timestamp: number;
}

export interface Property {
  name: string;
  signature: string;
  value: string;
}

export interface Raw {
  cache: Cache;
  id: string;
  name: string;
  properties: Property[];
  status: string;
}

export interface PlayerInfo {
  decoded: Decoded;
  raw: Raw;
}
export interface ServerCache {
  bannerURL?: string;
  serverInfo?: ServerInfoWithStripped;
  query?: QueryServer;
}
export interface ServerInfoWithStripped extends ServerInfo {
  motd_stripped: string;
}
export interface Extra {
  color: string;
  text: string;
}

export interface Motd_json {
  extra: Extra[];
  text: string;
}

export interface Player {
  max: number;
  now: number;
  sample: any[];
}

export interface Server {
  name: string;
  protocol: number;
}

export interface ServerInfo {
  status: string;
  online: boolean;
  motd: string;
  motd_json: Motd_json;
  favicon: string;
  error?: any;
  players: Player;
  server: Server;
  last_updated: string;
  duration: string;
}
export interface Player {
  max: number;
  now: number;
  list: any[];
}

export interface QueryServer {
  status: string;
  online: boolean;
  error?: any;
  server_mod: string;
  plugins: any[];
  players: Player;
  version: string;
  hostname: string;
  gametype: string;
  hostip: string;
  game_id: string;
  map: string;
  hostport: string;
  last_updated: string;
  duration: string;
}
export enum Facing {
  Left = 0,
  Right = 1,
}
