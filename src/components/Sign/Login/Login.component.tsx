import {
  Button,
  FormControl,
  FormGroup,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
} from "@mui/material";
import { LoginController } from "../../../controllers/Login.controller";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, []);

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const email = e.target.email_input.value;
    const password = e.target.password.value;

    const redirect = await LoginController(email, password);

    if (redirect) {
      navigate("/");
    }
  };
  return (
    <>
      <form onSubmit={handleLogin}>
        <FormControl>
          <InputLabel htmlFor="email_input">Email</InputLabel>
          <Input id="email_input" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password">Password</InputLabel>
          <Input id="password" aria-describedby="my-helper-text" />
        </FormControl>

        <Button type="submit">Enviar</Button>
      </form>
    </>
  );
}
