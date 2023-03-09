import axios from "axios";
import { PlayerInfo, PlayerInfoUUIDUsernameSearch, Facing as Facing } from "../typing";
export class MinecraftPlayerInfo {
  private usernameOrUUID;
  private minetoolsBaseURL = "http://api.minetools.eu/";
  private mcHeadsBaseURL = "https://mc-heads.net/";
  private uuid: string | undefined = undefined;
  /**
   *
   * @param param0 { usernameOrUUID: string }
   * @returns void
   */
  constructor({ usernameOrUUID }: { usernameOrUUID: string }) {
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
  async getPlayer() {
    const obj: PlayerInfoUUIDUsernameSearch = (
      await axios.get(`${this.minetoolsBaseURL}uuid/${this.usernameOrUUID}`)
    ).data;
    this.uuid = obj.id;
    return obj;
  }
  /**
   * @description Must specify UUID in constructor, or run getPlayer once for this to work!
   * @returns PlayerInfo
   */
  async getPlayerInfo() {
    const obj: PlayerInfo = (
      await axios.get(
        `${this.minetoolsBaseURL}profile/${this.uuid ? this.uuid : this.usernameOrUUID}`
      )
    ).data;
    return obj;
  }
  get getCachedUUID() {
    return this.uuid;
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
