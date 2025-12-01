import axios from "axios";
export function LoginService(email: string, password: string) {
  axios
    .post("http://localhost:3000/login", { email, password })
    .then(function (response) {
      console.log(response.data.token);
    })
    .catch(function (error) {
      console.log(error);
    });
}
