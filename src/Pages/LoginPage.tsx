import { Button } from "@mui/material";
import "../Common/css/styles.css";
import AuthLogin from "../Layouts/AuthLogin";
import Card from "../Components/Card";
import { useNavigate } from "react-router";
import { useState } from "react";
import Spinner from "src/Components/Spinner";
import CommonInput from "src/Components/CommonInput";
import { showError } from "src/Components/Toast";
import env from "src/env";

const LoginPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('password');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "password") {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigate("/home");
      }, 3000);
    } else {
      showError("Invalid username or password");
    }
  };

  return (
    <AuthLogin>
      <>
        <Card>
          <div className="login-main-outer">
            <Spinner isLoading={loading} />
            <div className="login-head-outer1">
              <span className="content-header-text">Kathawo Admin Panel</span>
            </div>
            <div className="login-head-outer">
              <CommonInput
                label="Username"
                placeholder="Enter username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="login-head-outer">
              <CommonInput
                label="Password"
                placeholder="Enter password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="login-head-outer">
              <Button className="login-btn" variant="contained" onClick={handleLogin}>
                Login
              </Button>
            </div>
          </div>
        </Card>
        <div className="version-outer">
          <span>{env.COMPANY}</span>
        </div>
      </>
    </AuthLogin>
  );
};

export default LoginPage;
