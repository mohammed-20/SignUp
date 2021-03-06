import React from "react";

import { Logo } from "../../Components/Logo";
import { Quote } from "../../Components/Quote";
import Back from "../../Components/Back";
import * as T from "../../Components/Typography";
import Form from "./Form";
import "./style.css";

export default function SignUp(props) {
  const { handleClick, handleLogin } = props;
  return (
    <div className="signup">
      <aside className="leftside ">
        <img className="backgroundImage" alt="img" />
        <Logo size="small" />
        <Quote type="fill" />
      </aside>

      <section className="rightside">
        <Back name="SignIn" handleClick={handleClick} />
        <div className="info-form">
          <div className="title">
            <T.H1>Register Individual Account!</T.H1>
            <T.SubTitle className="sub-title-signup">
              {" "}
              For the purpose of gamers regulation, your details are required.
            </T.SubTitle>
          </div>

          <Form handleLogin={handleLogin} />
        </div>
      </section>
    </div>
  );
}
