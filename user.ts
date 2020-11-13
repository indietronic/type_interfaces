import { Request } from 'express';
import { IndexResponseBody, UpdateRequest } from './common';

export interface UserEntity {
  id?: number;
  firstName?: string;
  lastName?: string;
  age?: number;
}

// requests
interface UserCreateRequestBody extends UserEntity {
  firstName: string;
  lastName: string;
  age: number;
}
interface UserUpdateRequestBody extends UserEntity {
  firstName?: string;
  lastName?: string;
  age?: number;
}

export interface UserCreateRequest extends Request {
  body: UserCreateRequestBody;
}
export interface UserUpdateRequest extends UpdateRequest {
  body: UserUpdateRequestBody;
}
// responses
export interface UserIndexResponseBody extends IndexResponseBody {
  rows: UserEntity[];
}
