import "./Footer.css"
import logo from "../../assets/instalogo.svg"

const Footer = () => {
    return (
        <div className="footer">
            <div className="topsection">
                <div className="left">
                    <img style={{background : "#000"}} src={logo} alt="kunalborkar2001@gmail.com" />
                    <p>IGSTUDIO</p>
                </div>
                <div className="mid">
                        <p>Home </p>
                        <p>Attorneys</p>
                        <p>Practice Areas</p>
                        <p>About Us</p>
                </div>
                <div className="right">
                        <p><i class="fa-brands fa-instagram"></i></p>
                        <p><i class="fa-brands fa-facebook"></i></p>
                        <p><i class="fa-brands fa-x-twitter"></i></p>
                        <p><i class="fa-brands fa-whatsapp"></i></p>
                </div>
            </div>
            <div className="bottomsection">
                <p>© 2020 Acme. All right reserved.</p>
                <p>Privacy Policy</p>
                <p>Terms of Service</p>
            </div>
        </div>
    )
}

export default Footer