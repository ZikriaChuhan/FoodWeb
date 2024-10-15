import Image from "next/image";
import Phoneicon from "../image/phoneicon.png"
import Emailicon from "../image/emailicon.png"
import Locationicon from "../image/locationicon.png"
import Submiticon from "../image/Submiticon.png"
import LogoIcon from "../image/logo.png"

export default function Footer() {



    return (
        <>
            <section className="footer flex justify-center items-Start  pt-16 pb-10">
                <div className="footerdiv1">
                    <div className="flex justify-center">
                        <Image src={LogoIcon} width={230} alt="Logo" />
                    </div>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetti ng  and0 industry.
                    </p>
                </div>

                <div className="footerdiv2">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Our Story</li>
                        <li>Get Started</li>
                        <li>FAQ</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </div>

                <div className="footerdiv3">
                    <h2>Contact Info</h2>
                    <ul>
                        <li className="flex justify-start items-center"> <Image src={Phoneicon} className="mr-2" alt="Phone icon" />Phone: 1 123 456 7890 </li>
                        <li className="flex justify-start items-center"> <Image src={Emailicon} className="mr-2" alt="Email icon" />Email: info@demolinks.com</li>
                        <li className="flex justify-start items-center"> <Image src={Locationicon} className="mr-3" alt="Location icon" />Head Office:</li>
                        <li className="ml-6">FAQ</li>
                        <li className="ml-6">Lorem ipsum</li>
                        <li className="ml-6">Surprise, AZ 85378</li>
                    </ul>
                </div>

                <div className="footerdiv4">
                    <h2>Join Our Newsletter</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and type.</p>
                    <div className="flex inputdiv ">
                        <input type="text" placeholder="Enter Your Email" />
                        <button> <Image src={Submiticon} alt="Submit icon" /></button>
                    </div>
                </div>
            </section>

            <section className="footerend">
                <h3>Copyright © 2020 demolink.com - All Rights Reserved.</h3>
            </section>
        </>
    )}
