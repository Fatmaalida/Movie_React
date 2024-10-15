
import TextCard from '../components/cardComponents/TextCard'
import LinkCard from '../components/cardComponents/LinkCard'

export default function Page404() {
    return (
        <>
            <div className="page-404 section--full-bg" data-bg="img/bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="page-404__wrap">
                                <div className="page-404__content">
                                    <TextCard text="404" className="page-404__title" />
                                    <TextCard text="The page you are looking for not available!" className="page-404__text" />
                                    <LinkCard text="go back" link="index.html" className="page-404__btn" />
                                    {/* <h1 className="page-404__title">404</h1>
							<p className="page-404__text">The page you are looking for not available!</p>
							<a href="index.html" className="page-404__btn">go back</a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
