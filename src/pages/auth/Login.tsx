import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/api/auth.service";
import { LoginCredentials } from "../../types/auth.types";
export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log("credentials", credentials);
      const response = await authService.login(credentials);
      console.log("response", response);
      if (response.code === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={credentials.username}
        onChange={handleChange}
        placeholder="Username"
      />
      <input
        type="password"
        name="password"
        value={credentials.password}
        onChange={handleChange}
        placeholder="Password"
      />
      <button type="submit">Login</button>
    </form>
  );
};
