import axios from "axios";
import { QueryServer, ServerCache } from "../typing";
import { stripIndents } from "common-tags";
export class MinecraftServerInfo {
  private serverIp: string;
  private port: number;
  private queryPort?: number;
  private minetoolsBaseURL = "https://api.minetools.eu/";
  private mcapiBaseURL = "https://mcapi.us/server/";
  private cache: ServerCache = {};
  /**
   *
   * @param {{serverIp: string, port?: number, queryport?: number}} param0
   */
  constructor({
    serverIp,
    port = 25565,
    queryPort,
  }: {
    serverIp: string;
    port?: number;
    queryPort?: number;
  }) {
    this.serverIp = serverIp;
    this.port = port || 25565;
    this.queryPort = queryPort;
  }
  get getServerIp() {
    return this.serverIp;
  }
  get getServerPort() {
    return this.port;
  }
  /**
   *
   * @param props { title?: string; theme?: "dark" | "white" }
   * @returns String
   * @description Returns the banner of the server, with motd, players, etc.
   */
  /**
   * @param {{title?: string, theme?: "dark" | "white"}} props
   */
  getBannerURL(
    props = {
      title: this.serverIp,
      theme: "dark",
    }
  ) {
    const portShow = this.port !== 25565 ? "" : "&port=25565";
    const titleShow = !props.title ? `&title=${this.serverIp}` : "&title=" + props.title;
    const themeShow = props.theme ? props.theme : "dark";
    const bannerURL = `https://mcapi.us/server/image?ip=${this.serverIp}${portShow}${titleShow}&theme=${themeShow}`;
    this.cache.bannerURL = bannerURL;
    return bannerURL;
  }
  /**
   *
   * @returns { ...ServerInfo, motd_stripped: string }
   * @description Returns information about the server.
   */
  async serverInfo() {
    const obj = (
      await axios.get(`${this.mcapiBaseURL}status?ip=${this.serverIp}&port=${this.port}`)
    ).data;
    const objWithStripped = {
      ...obj,
      motd_stripped: stripIndents(obj.motd),
    };
    this.cache.serverInfo = objWithStripped;
    return objWithStripped;
  }
  /**
   *
   * @returns QueryServer
   * @description Only usable if query-port is enabled on the server!
   * @async
   */
  async query() {
    if (!this.queryPort) return { err: "unspecified query port" };
    const obj: QueryServer = (
      await axios.get(`${this.minetoolsBaseURL}query/${this.serverIp}/${this.queryPort}`)
    ).data;
    this.cache.query = obj;
    return obj;
  }
  favicon() {
    return `${this.minetoolsBaseURL}favicon/${this.serverIp}/${this.port}`;
  }
}
