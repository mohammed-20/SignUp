import React from "react";

import { LargeLogo } from "../../Components/Logo";
import OrText from "../../Components/OrText";
import Superscene from "../../image/Superscene.png";
import { QuoteSignIn } from "../../Components/Quote";
import Icon from "../../Components/SocialMedia";
import * as T from "../../Components/Typography";
import Form from "./Form";

import "./style.css";

export default function SignIn(props) {
  const { handleClick } = props;
  return (
    <div className="signIn">
      <aside className="leftsideSignIn ">
        <LargeLogo size="large" className="Large-Logo" />
        <QuoteSignIn type="fill" />
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
