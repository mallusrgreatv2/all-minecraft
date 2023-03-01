import { PlayerInfo, PlayerInfoUUIDUsernameSearch, Facing as Facing } from "../typing";
export declare class MinecraftPlayerInfo {
    private usernameOrUUID;
    private minetoolsBaseURL;
    private mcHeadsBaseURL;
    private uuid;
    /**
     *
     * @param param0 { usernameOrUUID: string }
     * @returns void
     */
    constructor({ usernameOrUUID }: {
        usernameOrUUID: string;
    });
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
    getSkin(props?: {
        size?: number;
        helm?: boolean;
        extension?: string;
        facing?: Facing;
    }): {
        skinIsometric: string;
        skin: string;
    };
}
