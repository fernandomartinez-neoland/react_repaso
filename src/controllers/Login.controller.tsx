import { LoginService } from "../services/Login/Login.service";

export function LoginController(email: string, password: string) {
  return LoginService(email, password);
}
