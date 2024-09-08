import { apiClient } from "@/api";
import type { IAuthClient } from "@/types/api";

export class AuthClient {
  static async authorize(
    credentials: IAuthClient.AuthorizeRequest
  ): Promise<IAuthClient.AuthorizeResponse> {
    try {
      const response = await apiClient.post("/api/login/", credentials);
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }

  static async authenticate(
    credentials: IAuthClient.AuthenticateRequest
  ): Promise<IAuthClient.AuthenticateResponse> {
    try {
      const response = await apiClient.post("/api/register/", credentials);
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }

  static async likedCategories(
    credentials: IAuthClient.AuthenticateRequest
  ): Promise<IAuthClient.AuthenticateResponse> {
    try {
      const response = await apiClient.post("/api/liked_categories/", credentials);
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }

  static async favorites(
    credentials: IAuthClient.AuthenticateRequest
  ): Promise<IAuthClient.AuthenticateResponse> {
    try {
      const response = await apiClient.post("/api/favorites/", credentials);
      return response.data;
    } catch (error) {
      throw new Error(String(error));
    }
  }
}
