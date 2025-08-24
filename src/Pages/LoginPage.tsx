import { Button, TextField, Typography } from "@mui/material";
import "../Common/css/styles.css";
import AuthLogin from "../Layouts/AuthLogin";
import Card from "../Components/Card";
import { useNavigate } from "react-router";
import { useState } from "react";
import Spinner from "src/Components/Spinner";

const LoginPage = () => {
  const navigate = useNavigate();

  // State to manage input values
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
      alert("Invalid username or password");
    }
  };
  
  

  return (
    <AuthLogin>
      <Card>
        <div className="login-main-outer">
          <Spinner isLoading={loading} />
          <div className="login-head-outer1">
            <span className="content-header-text">Kathawo Admin Panel</span>
          </div>
          <div className="login-head-outer">
            <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1, color: 'grey' }}>Username</Typography>
            <TextField
              id="outlined-basic"
              size="small"
              placeholder="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              sx={{
                '& input': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'grey', // Default border color
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e67e22', // Orange border when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'grey', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#d35400', // Orange label when focused
                },
              }}
            />
          </div>

          <div className="login-head-outer">
            <Typography variant="body2" color="textSecondary" align="left" sx={{ mb: 1, color: 'grey' }}>Password</Typography>
            <TextField
              id="outlined-basic"
              size="small"
              placeholder="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{
                '& input': {
                  color: 'black',
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'grey', // Default border color
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: '#e67e22', // Orange border when focused
                  },
                },
                '& .MuiInputLabel-root': {
                  color: 'grey', // Default label color
                },
                '& .MuiInputLabel-root.Mui-focused': {
                  color: '#d35400', // Orange label when focused
                },
              }}
            />
          </div>
          <div className="login-head-outer">
            <Button className="login-btn" variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </div>
        </div>
      </Card>
    </AuthLogin>
  );
};

export default LoginPage;
