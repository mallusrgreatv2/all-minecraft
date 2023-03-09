export interface Cache {
  hIT: boolean;
  cache_time: number;
  cache_time_left?: number;
  cached_at: number;
  cached_until: number;
}

export interface Username_history {
  username: string;
}

export interface Skin {
  url: string;
  data: string;
}

export interface Raw {
  value: string;
  signature: string;
}

export interface Texture {
  custom: boolean;
  slim: boolean;
  skin: Skin;
  raw: Raw;
}

export interface PlayerInfo {
  uuid: string;
  username: string;
  username_history: Username_history[];
  textures: Texture;
  created_at?: any;
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
