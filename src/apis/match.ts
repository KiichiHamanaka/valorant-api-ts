import axios from 'axios';
import { MatchDto, MatchlistDto, RecentMatchesDto } from '../types';

/**
 * VAL-MATCH-V1
 */
export default class Match {
  accessToken?: string
  constructor(accessToken?: string) {
    this.accessToken = accessToken
  }
  /**
   * プレイヤー名からアカウント情報を返す関数
   * @param matchId マッチID
   */
  async getMatches(matchId: string): Promise<MatchDto> {
    const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${matchId}`
    return await axios.get(url, { headers: { Authorization: `Bearer ${this.accessToken}` } })
  }

  /**
   * プレイヤー名からアカウント情報を返す関数
   * @param puuid マッチID
   */
  async getMatchlistByPuuid(puuid: string): Promise<MatchlistDto> {
    const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${puuid}`
    return await axios.get(url, { headers: { Authorization: `Bearer ${this.accessToken}` } })
  }

  /**
   * プレイヤー名からアカウント情報を返す関数
   * @param queue キュー
   */
  async getRecentMatches(queue: string): Promise<RecentMatchesDto> {
    const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${queue}`
    return await axios.get(url, { headers: { Authorization: `Bearer ${this.accessToken}` } })
  }
}
