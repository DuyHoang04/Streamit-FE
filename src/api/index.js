import { createApi } from "../utils/helper";
import authSchema from "./authSchema";

export const authApi = {
  Login: createApi(authSchema.LOGIN),
  Register: createApi(authSchema.REGISTER),
  LogOut: createApi(authSchema.LOGOUT),
  RefreshToken: createApi(authSchema.REFRESH_TOKEN),
};
