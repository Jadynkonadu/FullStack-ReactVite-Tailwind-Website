import PropTypes from "prop-types";
import About from "../components/layout/About"

const AboutPage = (props) => {
    return (
        <div className="container mt-16 mx-auto md:px-6">
            <section className="mb-32 text-center">
                <h2 className="mb-6 text-3xl font-bold">
                    About The Team
                </h2>
                <div className="py-0.5 mb-10 bg-black/10" />
                <div>
                    <About />
                    <main>{props.children}</main>
                </div>
            </section>
        </div>
    )
}

AboutPage.propTypes = {
    children: PropTypes.node.isRequired,
}
export default AboutPage
