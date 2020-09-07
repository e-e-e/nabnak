import {
  BlockApiType,
  ChannelApiType,
  ConnectionApiType,
  MeApiResponse,
  PaginationAttributes,
} from './ArenaApiTypes';

const HTML_ERRORS: Record<number, string> = {
  401: 'Unauthorised',
  404: 'Not found',
  500: 'Server error',
  400: 'Bad request',
};

export interface ArenaService {
  me(): Promise<MeApiResponse>;
  channels(
    opts: { userId: string } & PaginationAttributes
  ): Promise<ChannelApiType>;
  channel(slug: string, params?: PaginationAttributes): Promise<ChannelApiType>;
  block(id: string): Promise<BlockApiType>;
  connect(
    channelSlug: string,
    id: string,
    type: 'Block' | 'Channel'
  ): Promise<ConnectionApiType>;
}

export class ArenaClient implements ArenaService {
  private readonly domain = 'https://api.are.na/v2/';
  private readonly headers: HeadersInit;

  constructor({ token }: { token?: string | null }) {
    this.headers = {
      'Content-Type': 'application/json',
      Authorization: token ? `Bearer ${token}` : '',
    };
  }

  me() {
    return this.getJson('me');
  }

  channels(params?: { userId?: string } & PaginationAttributes) {
    const qs = params ? this.paginationQueryString(params) : '';
    const url = params?.userId
      ? `users/${params.userId}/channels`
      : `channels/`;
    return this.getJson(`${url}?${qs}`);
  }

  channelSort(slug: string, data: string[]) {
    return this.putJson(`channels/${slug}/sort`, { ids: data });
  }

  channel(slug: string, params?: PaginationAttributes) {
    const qs = params ? this.paginationQueryString(params) : '';
    return this.getJson(`channels/${slug}/?${qs}`);
  }

  block(id: string) {
    return this.getJson(`blocks/${id}`);
  }

  connect(channelSlug: string, id: string, type: 'Block' | 'Channel') {
    return this.postJson(`channels/${channelSlug}/connections`, {
      connectable_type: type,
      connectable_id: id,
    });
  }

  remove(channelSlug: string, blockId?: string) {
    const url = blockId
      ? `channels/${channelSlug}/blocks/${blockId}`
      : `channels/${channelSlug}`;
    return this.del(url);
  }

  private paginationQueryString({ page, per }: PaginationAttributes) {
    const attrs = [];
    if (page) attrs.push(`page=${page}`);
    if (per) attrs.push(`per=${per}`);
    return attrs.join(';');
  }

  private process(res: Response) {
    if (res.status === 200) {
      return res.json();
    }
    throw HTML_ERRORS[res.status] || 'unknown';
  }

  private async getJson(endpoint: string) {
    return fetch(`${this.domain}${endpoint}`, {
      method: 'GET',
      headers: this.headers,
    }).then((res: Response) => {
      if (res.status === 200) {
        return res.json();
      }
      throw HTML_ERRORS[res.status] || 'unknown';
    });
  }

  private async putJson(endpoint: string, data?: unknown) {
    return fetch(`${this.domain}${endpoint}`, {
      method: 'PUT',
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    }).then((res) => {
      console.log(res);
      return res.json();
    });
  }
  private async postJson(endpoint: string, data?: unknown) {
    return fetch(`${this.domain}${endpoint}`, {
      method: 'POST',
      headers: this.headers,
      body: data ? JSON.stringify(data) : undefined,
    }).then((res) => res.json());
  }

  private async del(endpoint: string) {
    return fetch(`${this.domain}${endpoint}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(console.log);
  }
}
