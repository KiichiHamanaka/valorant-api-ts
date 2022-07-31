import axios from 'axios';
import { AccountDto } from '../types';

/**
 * ACCOUNT-V1
 */
export default class Account {
    accessToken?: string
    constructor(accessToken?: string) {
        this.accessToken = accessToken
    }
    /**
     * プレイヤーUUIDからアカウント情報を返す関数
     * @param puuid プレイヤーUUID
     */
    async getAccountByPuuid(puuid: string): Promise<AccountDto> {
        const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-puuid/${puuid}`
        return await axios.get(url, { headers: { "X-Riot-Token": `Bearer ${this.accessToken}` } })
    }
    /**
     * プレイヤー名からアカウント情報を返す関数
     * @param gameName ゲーム内プレイヤー名
     * @param tagLine タグライン #のあとのやつ
     */
    async getAccountByRiotId(gameName: string, tagLine: string): Promise<AccountDto> {
        const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`
        return await axios.get(url, { headers: { "X-Riot-Token": `Bearer ${this.accessToken}` } })
    }
    // /**
    //  * プレイヤー名からアカウント情報を返す関数
    //  * @param game ゲーム名
    //  * @param puuid ユニークID
    //  */
    // //TODO:ActiveShardDTOを作る
    // async getActiveShards(game: string, puuid: string): Promise<ActiveShardDto> {
    //     const url = `https://asia.api.riotgames.com/riot/account/v1/active-shards/by-game/${game}/by-puuid/${puuid}`
    //     return await axios.get(url, { headers: { "X-Riot-Token": `Bearer ${this.accessToken}` } })
    // }
    /**
     * トークンからアカウント情報を返す関数
     */
    async getMyAccount(): Promise<AccountDto> {
        const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/me`
        return await axios.get(url, { headers: { Authorization: `Bearer ${this.accessToken}` } })
    }
}
