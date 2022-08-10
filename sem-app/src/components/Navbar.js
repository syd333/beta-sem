import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <div onClick={() => navigate("/")}>
        <p>SYDNEY MIRANDA</p>
      </div>
      <div onClick={() => navigate("/contact")}>
        <p>Contact</p>
      </div>
    </>
  );
}

export default Navbar;
