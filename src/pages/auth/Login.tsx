import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../../services/api/auth.service";
import { LoginCredentials } from "../../types/auth.types";
import Button from "../../components/Button/Button";
import style from "./style.module.scss";
import { Toast } from '../../components/Toast/Toast';

export const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    username: "",
    password: "",
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await authService.login(credentials);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } else {
        setToastMessage(response.data.message || 'Error');
        setShowToast(true);
      }
    } catch (error) {
      setToastMessage((error as Error).message);
      setShowToast(true);
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
    <div className="container">
      <div className="row justify-center">
        <div className="col-12 col-md-6">
          <form onSubmit={handleSubmit} className={style.form}>
            <div className="mb-4">
              <div className={style.inputWrapper}>
                <label className={style.label} htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={credentials.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className={style.input}
                />
              </div>

              <div className={style.inputWrapper}>
                <label className={style.label} htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className={style.input}
                  autoComplete="on"
                />
              </div>
            </div>
            <Button
              variant="gradient"
              size="large"
              type="submit"
            >
              <span className="fw-700">LOGIN</span>
            </Button>
          </form>
        </div>
      </div>
      {showToast && (
        <Toast 
          message={toastMessage} 
          type="error" 
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};
