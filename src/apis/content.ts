import axios from 'axios';
import { ContentDto } from '../types';

/**
 * VAL-CONTENT-V1
 */
export default class Content {
    accessToken?: string
    constructor(accessToken?: string) {
        this.accessToken = accessToken
    }
    /**
     * 言語でフィルタしたコンテンツを返す
     */
    async getContents(): Promise<ContentDto> {
        const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/KannaHashimoto/%E3%83%9B%E3%83%B3%E3%83%A2%E3%83%8E`
        return await axios.get(url, { headers: { Authorization: `Bearer ${this.accessToken}` } })
    }
}
