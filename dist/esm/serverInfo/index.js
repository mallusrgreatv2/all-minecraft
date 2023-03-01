var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { stripIndents } from "common-tags";
export class MinecraftServerInfo {
    /**
     *
     * @param {{serverIp: string, port?: number, queryport?: number}} param0
     */
    constructor({ serverIp, port = 25565, queryPort, }) {
        this.minetoolsBaseURL = "https://api.minetools.eu/";
        this.mcapiBaseURL = "https://mcapi.us/server/";
        this.cache = {};
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
    getBannerURL(props = {
        title: this.serverIp,
        theme: "dark",
    }) {
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
    serverInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = (yield axios.get(`${this.mcapiBaseURL}status?ip=${this.serverIp}&port=${this.port}`)).data;
            const objWithStripped = Object.assign(Object.assign({}, obj), { motd_stripped: stripIndents(obj.motd) });
            this.cache.serverInfo = objWithStripped;
            return objWithStripped;
        });
    }
    /**
     *
     * @returns QueryServer
     * @description Only usable if query-port is enabled on the server!
     * @async
     */
    query() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.queryPort)
                return { err: "unspecified query port" };
            const obj = (yield axios.get(`${this.minetoolsBaseURL}query/${this.serverIp}/${this.queryPort}`)).data;
            this.cache.query = obj;
            return obj;
        });
    }
    favicon() {
        return `${this.minetoolsBaseURL}favicon/${this.serverIp}/${this.port}`;
    }
}
//# sourceMappingURL=index.js.map