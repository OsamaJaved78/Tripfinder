import React from "react";
import { Link } from "react-router-dom";
import { Divider } from "antd";
import Logo from "components/UI/Logo/Logo";
import { REGISTRATION_PAGE } from "settings/constant";
import SignInForm from "./SignInForm";
import SocialLogin from "../SocialLogin";
import Wrapper, {
  Title,
  TitleInfo,
  Text,
  FormWrapper,
  BannerWrapper,
} from "../Auth.style";
// demo image
import signInImage from "assets/images/login.jpg";
import tripFinder from "assets/images/classiestatelogo.png";

const SignIn = () => {
  return (
    <Wrapper>
      <FormWrapper>
        <Logo withLink linkTo="/" src={tripFinder} title="ClassiEstate" />
        <Title>Welcome Back</Title>
        <TitleInfo>Please log into your account</TitleInfo>
        <SignInForm />
        <Divider>Or log in with </Divider>
        <SocialLogin />
        <Text>
          Don't Have an Account?&nbsp;
          <Link to={REGISTRATION_PAGE}>Registration</Link>
        </Text>
      </FormWrapper>
      <BannerWrapper>
        <div
          style={{
            backgroundImage: `url(${signInImage})`,
            backgroundPosition: "center center",
            height: "100vh",
            backgroundSize: "cover",
          }}
        />
      </BannerWrapper>
    </Wrapper>
  );
};

export default SignIn;
