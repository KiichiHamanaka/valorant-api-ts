import Account from './apis/account';
import Content from './apis/content';
import Match from './apis/match';
import Ranked from './apis/ranked';
import Status from './apis/status';

type ValorantApiOptions = {
  accessToken?: string;
  clientId?: string;
  clientSecret?: string;
  region? : string;
};

export default class ValorantApi {
  private accessToken: string | undefined
  private readonly clientId: string | undefined
  private readonly clientSecret: string | undefined
  private readonly region: string | undefined
  account: Account;
  content: Content;
  match: Match;
  ranked: Ranked;
  status: Status;

  constructor(options: ValorantApiOptions){
    this.clientId = options.clientId
    this.clientSecret = options.clientSecret
    this.accessToken = options.accessToken
    this.region = options.region
    this.account = new Account(this.accessToken)
    this.content = new Content(this.accessToken)
    this.match = new Match(this.accessToken)
    this.ranked = new Ranked(this.accessToken)
    this.status = new Status(this.accessToken)
  }
  getAccessToken(): string | undefined {
    return this.accessToken;
  }
  getClientId(): string | undefined {
    return this.clientId
  }
  getClientSecret() : string | undefined {
    return this.clientSecret
  }
  getAuthorizationUrl(callbackUrl:string): string{
    return `https://auth.riotgames.com/authorize?redirect_uri=${callbackUrl}&client_id=${this.clientId}&response_type=code&scope=openid`
  }
  setAccessToken(accessToken:string) {
    this.accessToken = accessToken
  }
}

