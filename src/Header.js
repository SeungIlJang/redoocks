import React from "react";
import {useUser} from "./context/userContext";

const Header = () => {
    const {name,loggedIn} = useUser();

    return(

      <header>
          <a href ="#">Home</a> Hello, {name}! you are {"  "}
          {loggedIn ? "logged in": "anonymous"}
      </header>
)};

export default Header;
