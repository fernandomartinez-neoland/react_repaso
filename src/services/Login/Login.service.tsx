import { api } from "../../Model/Api.model";
export async function LoginService(email: string, password: string) {
  const response = await api.post("/login", { email, password });
  console.log("response.data", response.data);
  return response.data;
}
