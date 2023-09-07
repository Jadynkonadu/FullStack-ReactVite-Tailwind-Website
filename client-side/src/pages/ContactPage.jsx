import PropTypes from "prop-types";
import Contact from "../components/layout/Contact";

const ContactPage = (props) => {
    return (
        <div className="container mt-10 mx-auto md:px-6 ">
            <section className="mb-32 text-center">
                <h2 className="mb-6 text-3xl font-bold">
                    Contact Us
                </h2>
                <div className="py-0.5 mb-10 bg-black/10" />
                <div>
                    <Contact />
                    <main>{props.children}</main>
                </div>
            </section>
        </div>
    )
}

ContactPage.propTypes ={
    children: PropTypes.node.isRequired,
}
export default ContactPage
