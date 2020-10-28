import React from "react";
import Logo from "../../ComponentsSignup/Logo";
import OrText from "../../Components/OrText";
import Superscene from "../../image/Superscene.png";
import Quote from "../../ComponentsSignup/Quote";
import Icon from "../../ComponentsSignup/SocialMedia";
import * as T from "../../Components/Typography";
import Form from "./Form";
import "./style.css";

export default function SignIn(props) {
  const { handleClick } = props;
  return (
    <div className="signIn">
      <aside className="leftsideSignIn ">
        <Logo size="large" className="Large-Logo" />
        <Quote type="fill" className="quote-signIn" />
        <img className="img-game" src={Superscene} alt="Superscene" />
      </aside>

      <section className="rightSideSignIn">
        <div className="title1">
          <T.H1 className="title-signIn">Join the game!</T.H1>
          <T.SubTitle>Go inside the best gamers social network!</T.SubTitle>
        </div>
        <Icon />
        <OrText />
        <Form handleClick={handleClick} />
      </section>
    </div>
  );
}
