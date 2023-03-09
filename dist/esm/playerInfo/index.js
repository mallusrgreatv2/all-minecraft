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
import { Facing as Facing } from "../typing";
import PlayerInfoError from "../utils/PlayerInfoError";
export class MinecraftPlayerInfo {
    /**
     *
     * @param param0 { usernameOrUUID: string }
     * @returns void
     */
    constructor({ usernameOrUUID }) {
        this.mcHeadsBaseURL = "https://mc-heads.net/";
        this.ashconBaseURL = "https://api.ashcon.app/mojang/v2/user/";
        if (!usernameOrUUID)
            throw new Error("Username should be given.");
        const usernameRegex = /^[a-zA-Z0-9_]{2,16}$/gm;
        const uuidRegex = /^[a-zA-Z0-9-]{2,36}$/gm;
        if (usernameOrUUID.length === 36 && !uuidRegex.test(usernameOrUUID))
            throw new PlayerInfoError("Invalid uuid");
        if (!usernameRegex.test(usernameOrUUID))
            throw new PlayerInfoError("Invalid username");
        this.usernameOrUUID = usernameOrUUID;
    }
    get getUsernameOrUUID() {
        return this.usernameOrUUID;
    }
    /**
     * @returns PlayerInfo
     */
    getPlayerInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = (yield axios.get(`${this.ashconBaseURL}${this.usernameOrUUID}`)).data;
            return obj;
        });
    }
    getHead(props = {
        helm: false,
        extension: "png",
    }) {
        const avatar = {
            head: `${this.mcHeadsBaseURL}avatar/${this.usernameOrUUID}${props.size ? `/${props.size}` : ""}/${props.helm ? "helm" : "nohelm"}.${props.extension}`,
            headIsometric: `${this.mcHeadsBaseURL}head/${this.usernameOrUUID}${props.size ? `/${props.size}` : ""}/${props.facing ? props.facing : "right"}/${props.helm ? "helm" : "nohelm"}.${props.extension}`,
        };
        return avatar;
    }
    getSkin(props = {
        helm: false,
        extension: "png",
        facing: Facing.Right,
    }) {
        const avatar = {
            skinIsometric: `${this.mcHeadsBaseURL}body/${this.usernameOrUUID}${props.size ? `/${props.size}` : ""}/${props.helm ? "helm" : "nohelm"}/${props.facing == Facing.Left ? "right" : "left"}.${props.extension}`,
            skin: `${this.mcHeadsBaseURL}player/${this.usernameOrUUID}${props.size ? `/${props.size}` : ""}/${props.helm ? "helm" : "nohelm"}.${props.extension}`,
        };
        return avatar;
    }
}
//# sourceMappingURL=index.js.map