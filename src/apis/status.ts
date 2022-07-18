import axios from 'axios';
import { PlatformDataDto } from '../types';

/**
 * VAL-STATUS-V1
 */
export default class Status {
  accessToken?: string
  constructor(accessToken?: string) {
    this.accessToken = accessToken
  }
  /**
   * プレイヤー名からアカウント情報を返す関数
   */
  async getValorantStatus(): Promise<PlatformDataDto> {
    const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/`
    return await axios.get(url, { headers: { Authorization: `Bearer ${this.accessToken}` } })
  }
}
