import React from "react";

import Logo from "../../Components/Logo";
import Quote from "../../Components/Quote";
import Back from "../../Components/Back";
import * as T from "../../Components/Typography";
import Form from "./Form";
import "./style.css";

export default function SingUp(props) {
  const { handleClick } = props;
  return (
    <div className="signup">
      <aside className="leftside ">
        <img className="backgroundImage" />
        <Logo size="small" />
        <Quote type="fill" />
      </aside>

      <section className="rightside">
        <Back name="SignIn" handleClick={handleClick} />
        <div className="info-form">
          <div className="title">
            <T.H1>Register Individual Account!</T.H1>
            <T.SubTitle>
              {" "}
              For the purpose of gamers regulation, your details are required.
            </T.SubTitle>
          </div>

          <Form />
        </div>
      </section>
    </div>
  );
}
