import { PlayerInfo, Facing as Facing } from "../typing";
export declare class MinecraftPlayerInfo {
    private usernameOrUUID;
    private mcHeadsBaseURL;
    private ashconBaseURL;
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
     * @returns PlayerInfo
     */
    getPlayerInfo(): Promise<PlayerInfo>;
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
