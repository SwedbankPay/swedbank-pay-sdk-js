import { Method } from 'got';

export interface Operation {
  rel: string;
  href: string;
  method: Method;
  contenType: string;
}
