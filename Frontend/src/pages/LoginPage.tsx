import { useNavigate } from "react-router";
import "./App.css";

import darkGreen from "../assets/DarkGreen.png";
import lightGreen from "../assets/LightGreen.png";
import logo from "../assets/Logo.png";
import { Box } from "@chakra-ui/react";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  function goToHomePage() {
    navigate("/home");
  }

  return (
    <>
      <div className="colorSectionTop">
        <div className="darkGreenBackgroundTop">
          <img src={darkGreen} alt="Darker Green Color" />
        </div>
        <div className="lightGreenBackgroundTop">
          <img src={lightGreen} alt="Lighter Green Color" />
        </div>
      </div>
      <div className="welcomeSection">
        <div className="titleHeader">
          <img src={logo} alt="" />
          <h3>
            Hitta eller skapa mötesplatser för att träffa fantastiska personer!!
          </h3>
        </div>
        <Box className="loginButton" onClick={goToHomePage}>
          <p>Login</p>
        </Box>
        <a className="registerButton" href="/login">
          Register
        </a>
      </div>
    </>
  );
};

export default LoginPage;
