import { QueryServer } from "../typing";
export declare class MinecraftServerInfo {
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
    constructor({ serverIp, port, queryPort, }: {
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
    getBannerURL(props?: {
        title: string;
        theme: string;
    }): string;
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
    query(): Promise<QueryServer | {
        err: string;
    }>;
    favicon(): string;
}
