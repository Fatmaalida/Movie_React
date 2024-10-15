
import ButtonCard from '../components/cardComponents/ButtonCard'
import InputTextCard from '../components/cardComponents/InputTextCard'
import LogoCard from '../components/cardComponents/LogoCard'
import TextCard from '../components/cardComponents/TextCard'

export default function ForgotPage() {
    return (
        <>
            <div className="sign section--full-bg" data-bg="img/bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="sign__content">
                                <form action="#" className="sign__form">
                                    <a href="index.html" className="sign__logo">
                                        <LogoCard href="index.html" imgSrc="./public/img/logo.svg" altText="" />
                                    </a>

                                    <div className="sign__group">
                                        <InputTextCard placeholder="Email" />
                                    </div>

                                    <div className="sign__group sign__group--checkbox">
                                        <input id="remember" name="remember" type="checkbox" checked="checked" />
                                        <label htmlFor="remember">I agree to the <a href="privacy.html">Privacy Policy</a></label>
                                    </div>

                                    <ButtonCard buttonText="Send" />
                                    {/* <button className="sign__btn" type="button">Send</button> */}

                                    <TextCard text="We will send a password to your Emai" className="sign__text" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}
