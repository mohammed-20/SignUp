import React from "react";

import Logo from "../../Components/Logo";
import Paragraph from "../../Components/Paragraph";
import Quote from "../../Components/Quote";
import Back from "../../Components/Back";
import Form from "./Form";
import "./style.css";
function SingUp() {
  return (
    <div className="signup">
      <aside className="leftside ">
        <img className="backgroundImage" />
        <Logo size="small" />
        <Quote type="fill" />
      </aside>

      <section className="rightside">
        <Back />
        <div className="info-form">
          <Paragraph />
          <Form />
        </div>
      </section>
    </div>
  );
}
export default SingUp;
