import axios from 'axios';
import { LeaderboardDto } from '../types';

/**
 * VAL-RANKED-V1
 */
export default class Ranked {
  accessToken?: string
  constructor(accessToken?: string) {
    this.accessToken = accessToken
  }
  /**
   * コンペのキューからリーダーボードを返す関数
   * @param actId アクトID
   */
  async getLeaderBoard(actId: string): Promise<LeaderboardDto> {
    const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${actId}`
    return await axios.get(url)
  }
}
