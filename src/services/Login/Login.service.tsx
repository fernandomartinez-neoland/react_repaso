import { api } from "../../Model/Api.model";
export async function LoginService(email: string, password: string) {
  const response = await api.post("/login", { email, password });

  if (response.status === 200) {
    localStorage.setItem("token", response.data.token);
    return true;
  }
  return false;
}
