import { Request } from 'express';
import { IncomingHttpHeaders } from 'http';

interface Iusers {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string;
}

export interface UserRequest extends Request {
  headers: IncomingHttpHeaders;
  user?: Iusers;
}

export default Iusers;