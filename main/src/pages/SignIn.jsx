import ButtonCard from "../components/cardComponents/ButtonCard";
import InputPasswordCard from "../components/cardComponents/InputPasswordCard";
import InputTextCard from "../components/cardComponents/InputTextCard";
import LinkCard from "../components/cardComponents/LinkCard";
import LogoCard from "../components/cardComponents/LogoCard";
import SocialIconCard from "../components/cardComponents/SocialIconCard";
import TextCard from "../components/cardComponents/TextCard";

export default function SignIn() {
    return (
        <>
            <div className="sign section--full-bg" data-bg="img/bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sign__content">
                                <form action="#" className="sign__form">
                                    <LogoCard href="index.html" imgSrc="./public/img/logo.svg" altText="" />

                                    <div className="sign__group">
                                        <InputTextCard placeholder="Email" />
                                    </div>

                                    <div className="sign__group">
                                        <InputPasswordCard />
                                    </div>

                                    <div className="sign__group sign__group--checkbox">
                                        <input id="remember" name="remember" type="checkbox" checked="checked" />
                                        <label htmlFor="remember">Remember Me</label>
                                    </div>

                                    <ButtonCard className="sign__btn" buttonText="Sign in" />

                                    <span className="sign__delimiter">or</span>

                                    <div className="sign__social">
                                        <SocialIconCard className="fb" href="https://www.facebook.com" iconType="facebook" />
                                        <SocialIconCard className="tw" href="https://www.twitter.com" iconType="twitter" />
                                        <SocialIconCard className="gl" href="https://www.google.com" iconType="google" />
                                    </div>

                                    <div className="sign__text">
                                        <TextCard text="Don't have an account?" />
                                        <LinkCard text="Sign up!" link="signup.html" />
                                    </div>

                                    <span className="sign__text">
                                        <LinkCard text="Forgot password?" link="forgot.html" />
                                    </span>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
