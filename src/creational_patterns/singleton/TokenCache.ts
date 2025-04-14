export class TokenCache {
  private static instance: TokenCache;
  private token: string | null = null;
  private expiresAt: number = 0;

  private constructor() {}

  public static getInstance(): TokenCache {
    if (!TokenCache.instance) {
      TokenCache.instance = new TokenCache();
    }
    return TokenCache.instance;
  }

  public setToken(token: string, expiresInSeconds: number): void {
    this.token = token;
    this.expiresAt = Date.now() + expiresInSeconds * 1000;
  }

  public getToken(): string | null {
    if (this.token && Date.now() < this.expiresAt) {
      return this.token;
    }

    // Token expired
    this.token = null;
    return null;
  }

  public isTokenValid(): boolean {
    return !!this.token && Date.now() < this.expiresAt;
  }
}
