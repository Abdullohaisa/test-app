import AsyncStorage from "@react-native-async-storage/async-storage";
import { atom } from "jotai";
import { atomWithStorage, createJSONStorage } from "jotai/utils";
import { AuthResponse, AuthState, LoginRequest } from "./auth.interface";
import axios, { AxiosError } from "axios";
import { API } from "../api/api";

const storage = createJSONStorage<AuthState>(() => AsyncStorage);

const INITIAL_STATE = {
  access_token: null,
  isLoading: false,
  error: null,
};

export const authAtom = atomWithStorage<AuthState>(
  "auth",
  INITIAL_STATE,
  storage
);

export const loginAtom = atom(
  (get) => get(authAtom),
  async (_get, set, { email, password }: LoginRequest) => {
    try {
      set(authAtom, {
        access_token: null,
        isLoading: true,
        error: null,
      });
      const { data } = await axios.post<AuthResponse>(API.login, {
        email,
        password,
      });
      set(authAtom, {
        access_token: data.accessToken,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      if (error instanceof AxiosError) {
        set(authAtom, {
          access_token: null,
          isLoading: false,
          error: error.response?.data.message,
        });
      }
    }
  }
);

export const logoutAtom = atom(null, async (_get, set) => {
  set(authAtom, INITIAL_STATE);
});

// email: "vasia@pupkin.ru",
// password: "12345678",
