interface AuthService {
  login(): void;
  authorise(code: string): Promise<string>;
}

export class AuthClient implements AuthService {
  private readonly BASE_URL = 'https://dev.are.na/oauth';

  constructor(
    private readonly applicationId: string,
    private readonly applicationSecret: string,
    private readonly redirectUrl: string
  ) {}

  login() {
    window.location.href = `${this.BASE_URL}/authorize?client_id=${this.applicationId}&redirect_uri=${this.redirectUrl}&response_type=code`;
  }

  authorise(code: string): Promise<string> {
    return fetch(
      `${this.BASE_URL}/token?client_id=${this.applicationId}&client_secret=${this.applicationSecret}&code=${code}&grant_type=authorization_code&redirect_uri=${this.redirectUrl}`,
      { method: 'POST' }
    )
      .then((res) => res.json())
      .then((data) => data.access_token);
  }
}
