import { LoginData } from "@/app/Login/page";
import { api, iApiConfig } from "@/services/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

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
  console.log("response", response);

  return response;
}

export function useMutateLogin() {
  const router = useRouter();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success) {
        toast.success("Logged in successfully!", {
          duration: 5000,
        });

        router.push("/Home");
        return data;
      }
    },
  });
}
