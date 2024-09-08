export namespace IAuthClient {
  export interface AuthorizeRequest {
    email: string;
    password: string;
  }

  export interface AuthorizeResponse {
    access: string;
    refresh: string;
  }

  export interface AuthenticateRequest extends AuthorizeRequest {
    phone_number: string;
    full_name: string;
  }

  export interface AuthenticateResponse extends AuthorizeResponse {
    message: string;
  }
}
