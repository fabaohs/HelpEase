import { LoginData } from "@/app/Login/page";
import { api, iApiConfig } from "@/services/api";
import { useMutation } from "@tanstack/react-query";

interface iLoginParams {
  login: LoginData;
}

async function login({ login }: iLoginParams) {
  const params: iApiConfig = {
    path: "/account/auth",
    config: {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    },
  };

  const response = await api(params);

  return response;
}

export function useMutateLogin() {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
  });
}
