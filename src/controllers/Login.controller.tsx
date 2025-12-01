import { LoginService } from "../services/Login/Login.service";

export function LoginController(email: string, password: string) {
  LoginService(email, password);

  console.log();
}
