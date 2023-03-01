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
import { SkinFacing as Facing } from "../typing";
export class MinecraftPlayerInfo {
    /**
     *
     * @param param0 { usernameOrUUID: string }
     * @returns void
     */
    constructor({ usernameOrUUID }) {
        this.minetoolsBaseURL = "https://api.minetools.eu/";
        this.mcHeadsBaseURL = "https://mc-heads.net/";
        this.uuid = undefined;
        this.usernameOrUUID = usernameOrUUID;
    }
    get getUsernameOrUUID() {
        return this.usernameOrUUID;
    }
    /**
     *
     * @description {usernameOrUUID} MUST be a UUID / Username!
     * @returns PlayerInfoUUIDUsernameSearch
     */
    getPlayer() {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = (yield axios.get(`${this.minetoolsBaseURL}uuid/${this.usernameOrUUID}`)).data;
            this.uuid = obj.id;
            return obj;
        });
    }
    /**
     * @description Must specify UUID in constructor, or run getPlayer once for this to work!
     * @returns PlayerInfo
     */
    getPlayerInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = (yield axios.get(`${this.minetoolsBaseURL}profile/${this.uuid ? this.uuid : this.usernameOrUUID}`)).data;
            return obj;
        });
    }
    get getCachedUUID() {
        return this.uuid;
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