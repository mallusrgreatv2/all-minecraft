import axios from "axios";
import { PlayerInfo, Facing as Facing } from "../typing";
import PlayerInfoError from "../utils/PlayerInfoError";
export class MinecraftPlayerInfo {
  private usernameOrUUID;
  private mcHeadsBaseURL = "https://mc-heads.net/";
  private ashconBaseURL = "https://api.ashcon.app/mojang/v2/user/";
  /**
   *
   * @param param0 { usernameOrUUID: string }
   * @returns void
   */
  constructor({ usernameOrUUID }: { usernameOrUUID: string }) {
    if (!usernameOrUUID) throw new Error("Username should be given.");
    const usernameRegex = /^[a-zA-Z0-9_]{2,16}$/gm;
    const uuidRegex = /^[a-zA-Z0-9-]{2,36}$/gm;
    if (usernameOrUUID.length === 36 && !uuidRegex.test(usernameOrUUID as string))
      throw new PlayerInfoError("Invalid uuid");
    if (!usernameRegex.test(usernameOrUUID)) throw new PlayerInfoError("Invalid username");
    this.usernameOrUUID = usernameOrUUID;
  }
  get getUsernameOrUUID() {
    return this.usernameOrUUID;
  }
  /**
   * @returns PlayerInfo
   */
  async getPlayerInfo() {
    const obj: PlayerInfo = (await axios.get(`${this.ashconBaseURL}${this.usernameOrUUID}`)).data;
    return obj;
  }
  getHead(
    props: { size?: number; helm?: boolean; extension?: string; facing?: "left" | "right" } = {
      helm: false,
      extension: "png",
    }
  ) {
    const avatar = {
      head: `${this.mcHeadsBaseURL}avatar/${this.usernameOrUUID}${
        props.size ? `/${props.size}` : ""
      }/${props.helm ? "helm" : "nohelm"}.${props.extension}`,
      headIsometric: `${this.mcHeadsBaseURL}head/${this.usernameOrUUID}${
        props.size ? `/${props.size}` : ""
      }/${props.facing ? props.facing : "right"}/${props.helm ? "helm" : "nohelm"}.${
        props.extension
      }`,
    };
    return avatar;
  }
  getSkin(
    props: { size?: number; helm?: boolean; extension?: string; facing?: Facing } = {
      helm: false,
      extension: "png",
      facing: Facing.Right,
    }
  ) {
    const avatar = {
      skinIsometric: `${this.mcHeadsBaseURL}body/${this.usernameOrUUID}${
        props.size ? `/${props.size}` : ""
      }/${props.helm ? "helm" : "nohelm"}/${props.facing == Facing.Left ? "right" : "left"}.${
        props.extension
      }`,
      skin: `${this.mcHeadsBaseURL}player/${this.usernameOrUUID}${
        props.size ? `/${props.size}` : ""
      }/${props.helm ? "helm" : "nohelm"}.${props.extension}`,
    };
    return avatar;
  }
}
