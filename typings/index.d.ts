import { Facing, PlayerInfoUUIDUsernameSearch, PlayerInfo } from "./typing";
declare module "all-minecraft" {
  class MinecraftPlayerInfo {
    private usernameOrUUID;
    private minetoolsBaseURL;
    private mcHeadsBaseURL;
    private uuid;
    /**
     *
     * @param param0 { usernameOrUUID: string }
     * @returns void
     */
    constructor({ usernameOrUUID }: { usernameOrUUID: string });
    get getUsernameOrUUID(): string;
    /**
     *
     * @description {usernameOrUUID} MUST be a UUID / Username!
     * @returns PlayerInfoUUIDUsernameSearch
     */
    getPlayer(): Promise<PlayerInfoUUIDUsernameSearch>;
    /**
     * @description Must specify UUID in constructor, or run getPlayer once for this to work!
     * @returns PlayerInfo
     */
    getPlayerInfo(): Promise<PlayerInfo>;
    get getCachedUUID(): string | undefined;
    getHead(props?: {
      size?: number;
      helm?: boolean;
      extension?: string;
      facing?: "left" | "right";
    }): {
      head: string;
      headIsometric: string;
    };
    getSkin(props?: { size?: number; helm?: boolean; extension?: string; facing?: Facing }): {
      skinIsometric: string;
      skin: string;
    };
  }
  class MinecraftServerInfo {
    private serverIp;
    private port;
    private queryPort?;
    private minetoolsBaseURL;
    private mcapiBaseURL;
    private cache;
    /**
     *
     * @param {{serverIp: string, port?: number, queryport?: number}} param0
     */
    constructor({
      serverIp,
      port,
      queryPort,
    }: {
      serverIp: string;
      port?: number;
      queryPort?: number;
    });
    get getServerIp(): string;
    get getServerPort(): number;
    /**
     *
     * @param props { title?: string; theme?: "dark" | "white" }
     * @returns String
     * @description Returns the banner of the server, with motd, players, etc.
     */
    /**
     * @param {{title?: string, theme?: "dark" | "white"}} props
     */
    getBannerURL(props?: { title: string; theme: string }): string;
    /**
     *
     * @returns { ...ServerInfo, motd_stripped: string }
     * @description Returns information about the server.
     */
    serverInfo(): Promise<any>;
    /**
     *
     * @returns QueryServer
     * @description Only usable if query-port is enabled on the server!
     * @async
     */
    query(): Promise<any>;
    favicon(): string;
  }
}
