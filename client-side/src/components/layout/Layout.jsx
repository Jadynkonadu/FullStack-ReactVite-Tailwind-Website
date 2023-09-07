import PropTypes from "prop-types";
import Nav from "./Nav";

const Layout = (props) =>{
    return (
        <section>
        <div>
            <Nav />
            <main className="pt-10">{props.children}</main>
            </div>
        </section>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
export default Layout