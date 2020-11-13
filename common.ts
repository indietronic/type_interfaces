
// requests
import { Request } from 'express';

type ShowRequestParams = { id?: string; };
type DestroyRequestParams = { id?: string; };
type UpdateRequestParams = { id?: string; };

export interface ShowRequest extends Request<ShowRequestParams> {}
export interface DestroyRequest extends Request<DestroyRequestParams> {}
export interface UpdateRequest extends Request<UpdateRequestParams> {}

// responses
export interface IndexResponseBody {
  rows: any[];
  count: number;
}
